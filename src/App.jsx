import React, { useReducer, useEffect, useCallback, createContext, useMemo } from 'react';
import GlobalStyle from './Style/globalStyles';
import Template from './Components/Template';
import AddMessage from './Components/AddMessage';
import Reset from './Components/Reset';
import ResetMessage from './Components/ResetMessage';
import CheckMessage from './Components/CheckMessage';
import Report from './Components/Report';
import ChallengeBoard from './Components/ChallengeBoard';
import StartChallenge from './Components/StartChallenge';
import styled, { ThemeProvider } from 'styled-components';
import { FlashAuto } from '@styled-icons/material';
import { CheckCircleOutlineDimensions } from '@styled-icons/material/CheckCircleOutline';


export const ChallengeContext = createContext({ // 초기값
  initial : false,
  check: false,
  modal: {
    form: false,
    report: false,
    reset: false,
  },
  count: 0,
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
  check: false,
  modal: {
    form: false,
    report: false,
    reset: false,
  },
  count: 0,
  cellState: 'unchecked',
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
export const EDIT_CHALLENGE = 'EDIT_CHALLENGE';
export const CHECKED_CELL = 'CHECKED_CELL';
export const CANCELED_CELL = 'CANCELED_CELL';
export const HIDE_CHECKMESSAGE = 'HIDE_CHECKMESSAGE';
export const RESET_CHALLENGE = 'RESET_CHALLENGE';

const reducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_MODAL: 
      return {
        ...state,
        modal: {
          form: action.form,
          report: action.report,
          reset: action.reset,
        }
    }
    case START_CHALLENGE: 
      return {
        ...state,
        challenge : action.challenge,
        initial: true,
      }
    case EDIT_CHALLENGE: 
    return {
      ...state,
      challenge : action.challenge,
    }
    case CHECKED_CELL: 
      return {
        ...state,
        count: state.count + 1,
        check: true,
        cellState: 'checked',
      }
    case CANCELED_CELL: 
      return {
        ...state,
        count: state.count - 1,
        check: true,
        cellState: 'unchecked',
      }
    case HIDE_CHECKMESSAGE: 
      return {
        ...state,
        check: false,
      }
    case RESET_CHALLENGE: 
      return initialState;
    default :
      return state;
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modal, initial, count, challenge, cellState, check } = state;

  const onClickReset = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL, reset: true });
  }, []);


  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: HIDE_CHECKMESSAGE });
    }, 600)
  }, [check]);

  const value = useMemo(() => (
    { challenge: challenge, modal: modal, dispatch, initial, count, cellState, check }
  ), [challenge, initial, count, cellState, check]);


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
          <CheckMessage/>

        </Template>
        <StartChallenge 
          visible={modal.form}/>
        <Report 
          visible={modal.report} 
            count={count} 
            dispatch={dispatch}/>
        <ResetMessage 
          visible={modal.reset} 
          dispatch={dispatch}
          />
        <Reset onClickReset={onClickReset}/>
      </ChallengeContext.Provider>
  </>
  )
}
export default App;
