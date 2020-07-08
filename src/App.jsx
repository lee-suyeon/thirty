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
  days: Array(30).fill().map((v, i) => i + 1),
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

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const START_CHALLENGE = 'START_CHALLENGE';
export const CLICK_CELL = 'CLICK_CELL';
export const INCREMENT = 'INCREMENT';
export const DECREAMENT = 'DECREAMENT';
export const EDIT_CHALLENGE = 'EDIT_CHALLENGE';
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';


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
    case INCREMENT: 
      return {
        ...state,
        count: state.count + 1
      }
    case DECREAMENT: 
      return {
        ...state,
        count: state.count - 1
      }
    case EDIT_CHALLENGE: 
      return {
        ...state,
        challenge : action.challenge,
        modal: true,
      }
    case TOGGLE_MESSAGE: 
    console.log('toggleaction', action)
    console.log('togglestate', state)
      return {
        ...state,
        checkMessage: !state.checkMessage,
      }
    default :
      return state;
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modal, initial, count, challenge, days, edit, checkMessage } = state;

    // 모달창 open/close
  const onToggleModal = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL });
  }, []);

  console.log("checkMessage", checkMessage)

  useEffect(() => {
    if(checkMessage){
      setTimeout(() => {
        dispatch({ type: TOGGLE_MESSAGE });
      }, 500)
    }
  }, [checkMessage])

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
                  days={days}
                  dispatch={dispatch}
                  />
              </>
              }
              <CheckMessage message="Successfully checked" visible={checkMessage} dispatch={dispatch}/>
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
              <Reset />
        </Template>
    </>
  )
}
export default App;
