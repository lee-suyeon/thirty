import React, { useState, useEffect, useCallback } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { TOGGLE_MODAL, ChallengeContext  } from '../../App';
import Button from '../commons/Button';
import Modal from '../commons/Modal';

const ResultCircle = styled.div`
position: relative;
  width: 230px;
  height: 230px;
  background-color: #447d53;
  border-radius: 50%;
  color: #fff;
  font-size: 4rem;
  font-weight: 500;
  margin: 2rem 0;
  div.count {
    position: absolute;
    top: 20%;
    left: 15%;
  }
  div.total {
    position: absolute;
    bottom: 20%;
    right: 15%;
  }
`;
const ResultCont = styled.div`
  span{
    display: block;
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
  em {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;
const Bar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 100px;
  background-color: #fff;
  transform: translate(-50%, -50%) rotate(45deg);
`;
const ButtonGroup = styled.div`
  width: 100%;
`;

const Report = ({ count, visible, dispatch }) => {
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    if(count === 0){
      setResultMessage('도전 실패! 😭');
    } else if(count >= 1 && count < 10){
      setResultMessage('분발하세요! 💪');
    } else if(count >= 10 && count < 20){
      setResultMessage('좀 더 열심히! 👌');
    } else if(count >= 20 && count < 30){
      setResultMessage('잘 했어요! 👍');
    } else if(count === 30){
      setResultMessage('🎉도전 성공!!! 👏');
    }
  }, [count]);

  const onClickConfirm = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL, report: false });
  },[]);
    
  if(!visible) return null;
  return (
    <>
      <Modal
        title="CHALLENGE REPORT" 
        size="small">
      <ResultCircle>
        <div className="count">{count < 10 ? `0${count}` : count}</div>
        <Bar />
        <div className="total">30</div>
      </ResultCircle>
      <ResultCont>
        <span>SUCCESS RATE : {Math.round(count / 30 * 100)}%</span>
        <em>{resultMessage}</em>
      </ResultCont>
        <ButtonGroup>
          <Button title="OK" onClick={onClickConfirm}/>
        </ButtonGroup>
      </Modal>
    </>
  );
}

export default Report;