import React, { useState } from 'react';
import GlobalStyle from './Style/globalStyles';
import Template from './Components/Template';
import Modal from './Components/Modal';
import Board from './Components/Board';
import Note from './Components/Note';
import DashBoard from './Components/DashBoard';
import Form from './Components/Form';
import CellTable from './Components/CellTable';
import styled, { ThemeProvider } from 'styled-components';


const addNumbers = () => {
  const dayNumber = Array(30).fill().map((v, i) => i + 1);
  return dayNumber;
}

const App = () => {
  // const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);
  const [initial, setInitial] = useState(false);
  const [update, setUpdate] = useState(false);
  const [dayNumbers, setDayNumbers] = useState(addNumbers());
  const [challenge, setChallenge] = useState({
    goal: '',
    startDate: '',
    endDate: '',
    motivate: ''
  });


  // const onChangeGoal = (e) => {
  //     setGoal(e.target.value);
  // }

  // const handleCreate = (data) => {
  //   console.log(data);
  // }

  // const onToggleModal = () => {
  //   setModal((prev) => !prev)
  // }

  const onInsertChallenge = (goal, startDate, endDate, motivate) => {
    const first = {
      goal,
      startDate,
      endDate,
      motivate,
    }
    setChallenge(first);
    setInitial(true);
  }

  const onEditChallenge = () => {
    onToggleModal();
    setUpdate(true);
    return challenge;
  }

  const onToggleModal = () => {
    setModal( prev => !prev );
  }

  console.log(initial);

    return (
      <>
        <GlobalStyle />
          <Template>
            <Board visible={initial} onToggleModal={onToggleModal}>
              {initial &&
                <>
                  {/* <Note 
                    
                    /> */}
                  <DashBoard
                    challenge={challenge}
                    onEditChallenge={onEditChallenge}
                  />
                  <CellTable dayNumbers={dayNumbers}/>
                </>
                }
            </Board>
          </Template>
          {modal && 
            <Modal 
              title="YOUR CHALLENGE"
              onToggleModal={onToggleModal}
              >
                <Form 
                  onToggleModal={onToggleModal} 
                  onInsertChallenge={onInsertChallenge}
                  challenge={challenge}
                  />
              </Modal>}
      </>
    )
}

export default App;
