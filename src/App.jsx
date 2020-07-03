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



    // function go() {
    //     var now = new Date();
    //     var then = new Date('2017-09-10T10:00:00');
    //     var gap = now.getTime() - then.getTime();
    //     gap = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    //     document.write('<div id="dday">D-<span style="font-size:33px;">' + gap + '</span></div>');
    // }


const App = () => {
  // const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);
  const [initial, setInitial] = useState(false);
  const [update, setUpdate] = useState(false);
  const [count, setCount] = useState('00');
  const [challenge, setChallenge] = useState({
    goal: '',
    startDate: '',
    endDate: '',
    motivate: ''
  });

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


    return (
      <>
        <GlobalStyle />
          <Template>
            <Board visible={initial} onToggleModal={onToggleModal}>
              {initial &&
                <>
                  <DashBoard
                    challenge={challenge}
                    onEditChallenge={onEditChallenge}
                    count={count}
                  />
                  <CellTable
                    />
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
