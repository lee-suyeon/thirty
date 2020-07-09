import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../Style/Theme';
import { AddCircleOutline } from '@styled-icons/material';
import Cell from './Cell';

const BackBoard = styled.div`
   position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 650px;
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.02);
  padding: 2.5rem;
  margin-bottom: 50px;
`

const AddMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;
`
const AddButton = styled(AddCircleOutline)`
  display: block;
  fill: ${({ theme }) => theme.colors.subColor};
  width: 70px;
  margin: 0 auto 0.5rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    fill:  ${({ theme }) => theme.colors.mainColor};
  }
`

const Board = ({ children, initial, onToggleModal }) => {
   return (
      <>
         <BackBoard>
            {!initial && 
               <div className="add-challenge">
                  <AddMessage>                  
                  <AddButton onClick={onToggleModal}/>
                  There are no challenge yet.<br /> Click + button to add your first challenge.
                  </AddMessage>
               </div>
            }
               {children}
         </BackBoard>
      </>
   )
}

export default Board;
