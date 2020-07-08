import React, { useState, useEffect } from 'react';
import styled, { keyframes, css  } from 'styled-components';
import { TOGGLE_MESSAGE } from '../App';
import { CheckCircle } from '@styled-icons/material/CheckCircle';


const showUp = keyframes`
  from { 
   opacity: 0;
   transform: translate(-50%, 200px);
}
  to { 
   opacity: 1 
   transform: translate(-50%, 0px);
   }
`;

const hideDown = keyframes`
  from { 
   opacity: 1;
   transform: translate(-50%, 0px);
}
  to { 
   opacity: 0 
   transform: translate(-50%, 200px);
   }
`;

const MessageBox = styled.div`
position: absolute;
bottom: -5%;
left: 50%;
transform: translateX(-50%);
width: 330px;
height: 70px;
background-color: #fff;
border-radius: 10px;
box-shadow: 2px 2px 5px 5px rgba(0,0,0,0.02);
padding: 1rem;
z-index: 10;
margin: 0 auto;
animation: ${showUp} 0.25s forwards;

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
background-color: #447d53;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
`
const MessageCont = styled.p`
   display: flex;
   position: absolute;
   top: 50%;
   left: 2.5rem;
   transform: translateY(-50%);
   font-size: 1.2rem;
`
const CheckIcon = styled(CheckCircle)`
  display: block;
   margin-right: 1rem;
  fill: #447d53;
  width: 30px;
`

const CheckMessage = ({ message, visible, dispatch }) => {
   const [animate, setAnimate] = useState(false);
   const [localVisible, setLocalVisible] = useState(visible); //실제로 컴포넌트가 사라지는 시점을 지연

   //체크메세지가 false일때(안보일때는) -> 실행 X
   // visible 트루일때 if절 실행

   useEffect(() => {
      // visible 값이 true -> false 가 되는 것을 감지
      if (localVisible && !visible) { // localVisible은 true이고  visible이 false일때
        setAnimate(true); // 애니메이션은 실행되고 있다. 
        setTimeout(() => setAnimate(false), 250); // 250ms뒤에 애니메이션은 종료된다. 
      }
      setLocalVisible(visible); //false가 된다.  
    }, [localVisible, visible]);

   if(!animate && !localVisible) return null;

   console.log('visible', visible);
   return (
      <>
         <MessageBox disappear={!visible}>
            <IndexColor />
            <MessageCont>
               <CheckIcon />{message}
            </MessageCont>
         </MessageBox>
      </>
   )
}

export default CheckMessage;