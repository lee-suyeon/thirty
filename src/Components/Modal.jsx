import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Close } from '@styled-icons/material/Close';

const DarkBackground = styled.div`
   position: fixed;
   left: 0; top: 0;
   width: 100%; 
   height: 100%; 
   background: ${props => props.background || 'rgba(22, 50, 25, 0.8);'}
   z-index: 10;
`
const ModalBlock = styled.div`
   width: 490px;
   position: absolute;
   top: 50%; left: 50%;
   transform: translate(-50%, -50%);
   background-color: #fff;
   border-radius: 10px;
   box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.02);
   padding: 3rem;
   z-index: 20;
   h2 {
      color: #447d53;
      font-size: 32px;
      font-weight: 500;
      border-bottom: 2px solid #447d53;
      padding-bottom: 1.2rem;
   }
`
const CloseButton = styled(Close)`
  display: block;
  position: absolute;
  top: 1rem; right: 1rem;
  fill: #fff;
  width: 50px;
  cursor: pointer;
  z-index: 30;
`


const Modal = ({ children, title, onToggleModal, background }) => {

    return (
        <>
            <DarkBackground  background={background}/>
                <CloseButton onClick={onToggleModal} />
                <ModalBlock>
                    <h2>{title}</h2>
                    {children}
                </ModalBlock>
        </>
    )
}

export default Modal;