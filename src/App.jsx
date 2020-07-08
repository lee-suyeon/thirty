import React, { useState, useReducer, useEffect, useCallback } from 'react';
import GlobalStyle from './Style/globalStyles';
import Template from './Components/Template';
import Modal from './Components/Modal';
import Board from './Components/Board';
import DashBoard from './Components/DashBoard';
import Form from './Components/Form';
import CellTable from './Components/CellTable';
import Button from './Components/Button';
import Reset from './Components/Reset';
import CheckMessage from './Components/CheckMessage';
import styled, { ThemeProvider } from 'styled-components';
import { FlashAuto } from '@styled-icons/material';




const initialState = {
  modal : false,
  initial : false,
  count: 0,
  checkState: '',
  checkMessage: false,
  test: 'test',
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
export const CLICK_CELL = 'CLICK_CELL';
export const INCREMENT = 'INCREMENT';
export const DECREAMENT = 'DECREAMENT';
export const EDIT_CHALLENGE = 'EDIT_CHALLENGE';
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const RESET_CHALLENGE = 'RESET_CHALLENGE';
export const CHECKED_CELL = 'CHECKED_CELL';
export const CANCELED_CELL = 'CANCELED_CELL';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';


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
        checkState: 'check',
      }
    case CANCELED_CELL: 
      return {
        ...state,
        count: state.count - 1,
        checkMessage: true,
        checkState: 'cancel',
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
    // case TOGGLE_MESSAGE: 
    // console.log('toggleaction', action)
    // console.log('togglestate', state)
    //   return {
    //     ...state,
    //     checkMessage: !state.checkMessage,
    //   }
    case RESET_CHALLENGE: 
      return {
        ...state,
        modal : false,
        initial : false,
        count: 0,
        checkMessage: false,
        test: 'test',
        challenge: {
          goal: '',
          startDate: '',
          endDate: '',
          dday: '',
          motivate: ''
        },
      }
    default :
      return state;
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modal, initial, count, challenge, days, edit, checkMessage, checkState } = state;

    // 모달창 open/close
  const onToggleModal = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL });
  }, []);

  // useEffect(() => {
  //   if(checkMessage){
  //     setTimeout(() => {
  //       dispatch({ type: CHECKED_CELL });
  //     }, 500)
  //   }
  // }, [checkMessage])

  const onClickReset = useCallback(() => {
    dispatch({ type: RESET_CHALLENGE })
    alert('정말로 reset하시겠습니까?');
  });

  const onHideMessage = () => {
    dispatch({ type: HIDE_MESSAGE })
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: HIDE_MESSAGE })
    }, 1000)
  }, [checkMessage]);


  return (
    <>
      <GlobalStyle />
        <Template>
          <Board initial={initial} onToggleModal={onToggleModal}>
            {initial &&
              <>
                <DashBoard
                  edit={edit}
                  onToggleModal={onToggleModal}
                  dispatch={dispatch}
                  count={count}
                  challenge={challenge}
                  dispatch={dispatch}
                  />
                <CellTable
                  dday={challenge.dday}
                  dispatch={dispatch}
                  />
              </>
              }
            <CheckMessage checkState={checkState}  visible={checkMessage}/>
          </Board>
          {modal && 
            <Modal 
              title="YOUR CHALLENGE"
              onToggleModal={onToggleModal}
              >
                <Form
                  dispatch={dispatch}
                  onToggleModal={onToggleModal} 
                  challenge={challenge}
                  />
              </Modal>}
              <Reset onClickReset={onClickReset}/>
        </Template>
    </>
  )
}
export default App;
