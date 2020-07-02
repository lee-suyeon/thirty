import React, { useState } from 'react';
import GlobalStyle from './Style/globalStyles';
import Template from './Components/Template';
import Modal from './Components/Modal';
import Board from './Components/Board';
import Note from './Components/Note';
import DashBoard from './Components/DashBoard';
import styled, { ThemeProvider } from 'styled-components';


const App = () => {
  // const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);


  // const onChangeGoal = (e) => {
  //     setGoal(e.target.value);
  // }

  // const handleCreate = (data) => {
  //   console.log(data);
  // }

  // const onToggleModal = () => {
  //   setModal((prev) => !prev)
  // }

  const onToggleModal = () => {
    setModal( prev => !prev );
    console.log(modal)
  }



    return (
      <>
        <GlobalStyle />
          <Template>
            <Board onToggleModal={onToggleModal}>
              <Note />
              <DashBoard />
            </Board>
          </Template>
          {modal && 
            <Modal 
              title="YOUR CHALLENGE"
              onToggleModal={onToggleModal}
              ></Modal>}
      </>
    )
}

export default App;
