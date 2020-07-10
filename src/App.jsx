import React, { useReducer, useEffect, useCallback, createContext, useMemo } from 'react';
import GlobalStyle from './Style/globalStyles';
import Template from './Components/Template';
import AddMessage from './Components/AddMessage';
import Reset from './Components/Reset';
import ResetMessage from './Components/ResetMessage';
import CheckMessage from './Components/CheckMessage';
import ResultMessage from './Components/ResultMessage';
import ChallengeBoard from './Components/ChallengeBoard';
import StartChallenge from './Components/StartChallenge';
import styled, { ThemeProvider } from 'styled-components';
import { FlashAuto } from '@styled-icons/material';


export const ChallengeContext = createContext({ // 초기값
  initial : false,
  cellState: 'unchecked',
  challenge: {
    goal: '',
    startDate: '',
    endDate: '',
    dday: '',
    motivate: ''
  },
  dispatch: () => {},
});

const initialState = {
  initial : false,
  modal : false,
  reset: false,
  count: 0,
  cellState: 'unchecked',
  checkMessage: false,
  challenge: {
    goal: '',
    startDate: '',
    endDate: '',
    dday: '',
    motivate: ''
  },
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const START_CHALLENGE = 'START_CHALLENGE';
export const CHECKED_CELL = 'CHECKED_CELL';
export const CANCELED_CELL = 'CANCELED_CELL';
export const EDIT_CHALLENGE = 'EDIT_CHALLENGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export const RESET_CHALLENGE = 'RESET_CHALLENGE';

export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
export const RESET_MESSAGE = 'RESET_MESSAGE';


const reducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_MODAL: {
      return { 
        ...state,
        modal: !state.modal,
      }
    }
    case START_CHALLENGE: 
      return {
        ...state,
        challenge : action.challenge,
        initial: true,
      }
    case CHECKED_CELL: 
      return {
        ...state,
        count: state.count + 1,
        checkMessage: true,
        cellState: 'checked',
      }
    case CANCELED_CELL: 
      return {
        ...state,
        count: state.count - 1,
        checkMessage: true,
        cellState: 'unchecked',
      }
    case EDIT_CHALLENGE: 
      return {
        ...state,
        challenge : action.challenge,
        modal: true,
      }
    case HIDE_MESSAGE: 
      return {
        ...state,
        checkMessage: false,
      }
    case RESET_MESSAGE: 
      return {
        ...state,
        reset: !state.reset,
      }
    case CLOSE_MESSAGE: 
      return {
        ...state,
        reset: false,
      }
    case RESET_CHALLENGE: 
      return initialState;
    default :
      return state;
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modal, initial, count, challenge, reset, checkMessage, cellState } = state;

  const onClickReset = useCallback(() => {
    dispatch({ type: RESET_MESSAGE })
  }, []);

  const onClickConfirm = useCallback(() => {
    dispatch({ type: RESET_MESSAGE });
    dispatch({ type: RESET_CHALLENGE});
  },[]);

  const onClickCancel = useCallback(() => {
    dispatch({ type: CLOSE_MESSAGE });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: HIDE_MESSAGE })
    }, 700)
  }, [checkMessage]);

  const value = useMemo(() => (
    { challenge: challenge, dispatch, initial, count, cellState }
  ), [challenge, initial, count, cellState]);


  return (
  <>
    <GlobalStyle />
      <ChallengeContext.Provider value={value}>
        <Template>
          <AddMessage />
          <ChallengeBoard 
            visible={initial}
            count={count}
            cellState={cellState}
            />
          <CheckMessage cellState={cellState}  visible={checkMessage}/>

              {/* <ResultMessage visible={modal} count={count} dday={challenge.dday}/> */}
        </Template>
        {reset && <ResetMessage onClickConfirm={onClickConfirm} onClickCancel={onClickCancel}/>}
        {modal && <StartChallenge />}
        <Reset onClickReset={onClickReset}/>
      </ChallengeContext.Provider>
  </>
  )
}
export default App;
