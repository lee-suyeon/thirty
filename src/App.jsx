import React, { useState, useReducer } from 'react';
import GlobalStyle from './Style/globalStyles';
import Template from './Components/Template';
import Modal from './Components/Modal';
import Board from './Components/Board';
import DashBoard from './Components/DashBoard';
import Form from './Components/Form';
import CellTable from './Components/CellTable';
import styled, { ThemeProvider } from 'styled-components';
import { FlashAuto } from '@styled-icons/material';



const initialState = {
  modal : false,
  initial : false,
  count: 0,
  challenge: {
    goal: '',
    startDate: '',
    endDate: '',
    dday: '',
    motivate: ''
  },
}

const reducer = (state, action) => {
  switch(action.type) {
    case CREATE_CHALLENGE:
      return { 
        modal: !action.modal,
      }
    case START_CHALLENGE: {
      return {
        challenge : action.challenge,
        initial: true,
      }
    }
    default :
      return state;
  }
}

export const CREATE_CHALLENGE = 'CREATE_CHALLENGE';
export const START_CHALLENGE = 'START_CHALLENGE';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modal, initial, count, challenge } = state;

    // 모달창 open/close
  const onToggleModal = () => {
    dispatch({ type: CREATE_CHALLENGE, modal });
  }

  return (
    <>
      <GlobalStyle />
        <Template>
          <Board initial={initial} onToggleModal={onToggleModal}>
            {initial &&
              <>
                <DashBoard 
                  //onEditForm={onEditForm}
                  challenge={state.challenge}
                  dispatch={dispatch}
                  />
                <CellTable 
                  // onCountCell={onCountCell}
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
                  // onInsertChallenge={onInsertChallenge}
                  challenge={challenge}
                  />
              </Modal>}
        </Template>
    </>
  )
}

// const App = () => {
  
//   // const [modal, setModal] = useState(false);
//   // const [initial, setInitial] = useState(true);
//   // const [count, setCount] = useState(0);
//   // const [challenge, setChallenge] = useState({
//   //   goal: '',
//   //   startDate: '',
//   //   endDate: '',
//   //   dday: '',
//   //   motivate: ''
//   // });

//   // 모달창 open/close
//   const onToggleModal = () => {
//     dispatch({ type: TOGGLE_MODAL, modal })
//   }

//   // const onInsertChallenge = () => {

//   // }

//   // const onInsertChallenge = (goal, startDate, endDate, motivate, dday) => {
//   //   const first = {
//   //     goal,
//   //     startDate,
//   //     endDate,
//   //     dday,
//   //     motivate,
//   //   }
//   //   setChallenge(first);
//   //   setInitial(false);
//   // }



//   const onEditForm = () => {
//     onToggleModal();
//   }

//   // const onCountCell = (done) => {
//   //   if(!done){
//   //     console.log('countdone', done)
//   //     setCount((prevCount) => prevCount + 1);
//   //   } else {
//   //     alert("really?");
//   //     setCount((prevCount) => prevCount - 1);
//   //   }
//   // }

//     return (
//       <>
//         <GlobalStyle />
//           <Template>
//             <Board visible={initial} onToggleModal={onToggleModal}>
//               {!initial &&
//                 <>
//                   <DashBoard 
//                     // onEditForm={onEditForm}
//                     // challenge={challenge}
//                     // count={count}
//                     />
//                   <CellTable 
//                     // onCountCell={onCountCell}
//                     />
//                 </>
//                 }
//             </Board>
//           </Template>
//           {modal && 
//             <Modal 
//               title="YOUR CHALLENGE"
//               onToggleModal={onToggleModal}
//               >
//                 <Form
//                   // dispatch={dispatch}
//                   // initial={initial}
//                   // onToggleModal={onToggleModal} 
//                   // onInsertChallenge={onInsertChallenge}
//                   // challenge={challenge}
//                   />
//               </Modal>}
//       </>
//     )
// }

export default App;
