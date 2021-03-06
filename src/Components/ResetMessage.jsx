import React, { useCallback } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { TOGGLE_MODAL, RESET_CHALLENGE } from '../App';
import Button from './Button';
import Modal from './Modal';

const ButtonGroup = styled.div`
  width: 100%;
`;
const Info = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  padding: 1.5rem 2.3rem 0;
`;

const ResetMessage = ({ visible, dispatch }) => {

  const onClickConfirm = useCallback(() => {
    dispatch({ type: RESET_CHALLENGE });
    dispatch({ type: TOGGLE_MODAL, reset: false });
    },[]);
  
  const onClickCancel = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL, reset: false });
    console.log('cancel');
  }, []);

  if(!visible) return null;
  return (
    <>
      <Modal
        size="small"
        title="Reset Challenge"
        hide="none"
        >
        <Info>
          ⚠️<br />
          Are you sure you want to reset this challenge? <br />
          You will not be able to recover it.</Info>
        <ButtonGroup>
          <Button size="small" title="Reset" onClick={onClickConfirm}/>
          <Button size="small" title="Cancel" onClick={onClickCancel}  />
        </ButtonGroup>
      </Modal>
    </>
  );
}

export default ResetMessage;