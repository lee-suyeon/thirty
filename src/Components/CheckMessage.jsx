import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes, css  } from 'styled-components';
import { CheckCircle } from '@styled-icons/material/CheckCircle';
import { ChallengeContext } from '../App';

const showUp = keyframes`
  from { 
    opacity: 0;
    transform: translate(-50%, 50px);
}
  to { 
    opacity: 1;
    transform: translate(-50%, 0px);
   }
`;
const hideDown = keyframes`
  from { 
    opacity: 1;
    transform: translate(-50%, 0px);
  }
  to { 
    opacity: 0;
    transform: translate(-50%, 50px);
  }
`;
const MessageBox = styled.div`
  position: absolute;
  bottom: -2%; left: 50%;
  transform: translateX(-50%);
  width: 330px;
  height: 70px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0,0,0,0.02);
  padding: 1rem;
  margin: 0 auto;
  z-index: 10;

  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-name: ${showUp};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${hideDown};
    `}
`
const IndexColor = styled.div`
  width: 10px;
  height: 100%;
  position: absolute;
  top: 0; left: 0; botton: 0;
  background-color: #c5c5c5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  ${props =>
    props.cellState === 'checked' &&
    css`
      background-color: #447d53;
  `}
`;
const MessageCont = styled.div`
  display: flex;
  position: absolute;
  top: 50%; left: 2.5rem;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: 500;
  p{
    margin-top: 0.3rem;
  }
`;
const CheckIcon = styled(CheckCircle)`
  display: block;
  width: 30px;
  fill: #c5c5c5;
  margin-right: 1rem;

  ${props =>
    props.cellState === 'checked' &&
    css`
      fill: #447d53;
  `}
`;

const CheckMessage = () => {
  const { cellState, check } = useContext(ChallengeContext);
  const [animate, setAnimate] = useState(false); 
  const [localVisible, setLocalVisible] = useState(check);

  useEffect(() => {
    if(localVisible && !check){
      setAnimate(true);
      setTimeout(() => setAnimate(false), 400); 
    }
    setLocalVisible(check);
  }, [localVisible, check]);

  if(!animate && !localVisible) return null;
  return (
    <>
      <MessageBox disappear={!check} >
        <IndexColor cellState={cellState}/>
        <MessageCont>
          <CheckIcon cellState={cellState}/>
          <p>{cellState === 'checked' ? "Successfully Checked" : "Successfully Canceled"}</p>
        </MessageCont>
      </MessageBox>
    </>
  );
}

export default CheckMessage;