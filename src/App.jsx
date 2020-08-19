import React, { useEffect, useCallback, useMemo } from 'react';
import GlobalStyle from './Style/globalStyles';
import { Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import ChallengePage from './Components/ChallengePage/ChallengePage';
import Modal from './Components/commons/Modal';
// import AddMessage from './Components/Message/AddMessage';
// import Reset from './Components/commons/Reset';
// import ResetMessage from './Components/Message/ResetMessage';
// import CheckMessage from './Components/Message/CheckMessage';
// import Report from './Components/Message/Report';
// import ChallengeBoard from './Components/Dashboard/ChallengeBoard';
//import StartChallenge from './Components/StartChallenge';
import { useSelector } from 'react-redux';




// export const CHECKED_CELL = 'CHECKED_CELL';
// export const CANCELED_CELL = 'CANCELED_CELL';
// export const HIDE_CHECKMESSAGE = 'HIDE_CHECKMESSAGE';
// export const SAVE_CHALLENGE = 'SAVE_CHALLENGE';
// export const RESET_CHALLENGE = 'RESET_CHALLENGE';

// const reducer = (state, action) => {
//   switch(action.type) {
//     case TOGGLE_MODAL: 
//       return {
//         ...state,
//         modal: {
//           form: action.form,
//           report: action.report,
//           reset: action.reset,
//         }
//     }
//     case START_CHALLENGE: 
//       return {
//         ...state,
//         challenge : action.challenge,
//         initial: false,
//       }
//     case EDIT_CHALLENGE: 
//     return {
//       ...state,
//       challenge : action.challenge,
//     }
//     case CHECKED_CELL: 
//       return {
//         ...state,
//         count: state.count + 1,
//         check: true,
//         cellState: 'checked',
//       }
//     case CANCELED_CELL: 
//       return {
//         ...state,
//         count: state.count - 1,
//         check: true,
//         cellState: 'unchecked',
//       }
//     case HIDE_CHECKMESSAGE: 
//       return {
//         ...state,
//         check: false,
//       }
//     case SAVE_CHALLENGE: 
//       return {
//         ...state,
//         initial: action.initial,
//         challenge: action.challenge
//       }
//     case RESET_CHALLENGE: 
//       return initialState;
//     default :
//       return state;
//   }
// }

const App = () => {
  // const onClickReset = useCallback(() => {
  //   dispatch({ type: TOGGLE_MODAL, reset: true });
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({ type: HIDE_CHECKMESSAGE });
  //   }, 600)
  // }, [check]);

  // useEffect(() => {
  //   localStorage.setItem('state', JSON.stringify(state));
  // }, [state]);

  // const value = useMemo(() => (
  //   { challenge: challenge, modal: modal, dispatch, initial, count, cellState, check }
  // ), [challenge, initial, count, cellState, check]);

  return (
  <>
    <GlobalStyle />
    <Route exact path="/30days" component={MainPage} />
    <Route exact path="/challenge" component={ChallengePage} />
    <Modal />
        {/* <Template>
      <StartChallenge visible={modal}/>
          <AddMessage />
          <ChallengeBoard 
            visible={!initial}
            count={count}
            cellState={cellState}
            />
          <CheckMessage/>
        </Template>
        <Report 
          visible={modal.report} 
          count={count} 
          dispatch={dispatch}/>
        <ResetMessage 
          visible={modal.reset} 
          dispatch={dispatch}
          />
        <Reset onClickReset={onClickReset}/> */}
  </>
  );
}
export default App;
