import React, { useState, useEffect } from 'react';
import styled, { keyframes, css  } from 'styled-components';
import { CheckCircle } from '@styled-icons/material/CheckCircle';


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
bottom: -2%;
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
animation-duration: 0.5s;
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
`
const MessageCont = styled.div`
   display: flex;
   position: absolute;
   top: 50%;
   left: 2.5rem;
   transform: translateY(-50%);
   font-size: 1.2rem;
   font-weight: 500;

   p{
      margin-top: 0.3rem;
   }
`
const CheckIcon = styled(CheckCircle)`
  display: block;
   margin-right: 1rem;
  fill: #c5c5c5;
  width: 30px;

  ${props =>
   props.cellState === 'checked' &&
   css`
      fill: #447d53;
   `}
`

const CheckMessage = ({ visible, cellState }) => {
   const [animate, setAnimate] = useState(false); // 현재 트랜지션 효과를 보여주고 있는 중
   const [localVisible, setLocalVisible] = useState(visible); //실제로 컴포넌트가 사라지는 시점을 지연

   useEffect(() => {
      // visible 값이 true에서 false로 바뀌는 시점을 감지하여
      // animate 값을 true로 바꿔주고   
      // setTimeout함수를 사용하여 250ms이후 false로 바꿔줘야 한다.
      if(localVisible && !visible){
         setAnimate(true);
         setTimeout(() => setAnimate(false), 500); 
      }
      setLocalVisible(visible);
   }, [localVisible, visible]);

   if(!animate && !localVisible) return null;

   return (
      <>
         <MessageBox disappear={!visible} >
            <IndexColor cellState={cellState}/>
            <MessageCont>
               <CheckIcon cellState={cellState}/>
               <p>{cellState === 'checked' ? "Successfully Checked" : "Successfully Canceled"}</p>
            </MessageCont>
         </MessageBox>
      </>
   )
}

export default CheckMessage;