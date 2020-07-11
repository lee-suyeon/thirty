import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../Style/Theme';
import { AddCircleOutline } from '@styled-icons/material';
import { ChallengeContext, TOGGLE_MODAL } from '../App';


const AddGroup = styled.div`
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

const AddMessage = () => {
   const { dispatch, initial } = useContext(ChallengeContext);

   const onClickAddButton = () => {
      dispatch({ type: TOGGLE_MODAL, form: true });
    }

   if(initial) return null;
   return (
      <>
         <AddGroup>                  
            <AddButton onClick={onClickAddButton}/>
            There are no challenge yet.<br /> Click + button to add your first challenge.
         </AddGroup>
      </>
   )
}

export default AddMessage;
