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
      console.log("state", state)
      console.log("action", action.challenge)
      return {
        ...state,
        challenge : action.challenge,
        modal: true,
      }
    default :
      return state;
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modal, initial, count, challenge, days, edit } = state;

    // 모달창 open/close
  const onToggleModal = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL });
  }, []);

  console.log("challenge", challenge)


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
              <CheckMessage message="Successfully checked" />
              <CheckMessage message="Successfully canceled" />
              <Reset />
        </Template>
    </>
  )
}
export default App;
