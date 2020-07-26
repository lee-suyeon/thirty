import React from 'react';
import styled from 'styled-components';
import { Replay } from '@styled-icons/material/Replay';

const ResetButton = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 70px;
  height: 70px;
  background-color: #447d53;
  border-radius: 50%;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 5;
`;
const ReplayIcon = styled(Replay)`
  width: 30px;
  fill: #fff;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: rotate(-90deg);
  }
`;

const Reset = ({ onClickReset }) => {
  return (
    <>
      <ResetButton onClick={onClickReset}>
        <ReplayIcon />
        reset
      </ResetButton>
    </>
  );
}

export default Reset;