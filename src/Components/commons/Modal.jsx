import React, { useContext, useCallback } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { Close } from '@styled-icons/material/Close';

// const sizeStyles = css`
//   ${props =>
//     props.size === 'small' &&
//     css`
//       width: 450px;
//       padding: 2rem;
//   `}
// `;
const ModalOverlay = styled.div`
  position: fixed;
  left: 0; top: 0;
  width: 100%; 
  height: 100%; 
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;
const ModalBlock = styled.div`
  width: 470px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  z-index: 20;
  h2 {
    width: 100%;
    color: #fff;
    background: #f19065;
    font-size: 32px;
    font-weight: 500;
    padding-bottom: 1.2rem;
  }

  ${sizeStyles}
`;
const CloseButton = styled(Close)`
  display: 'block';
  position: absolute;
  top: 1rem; right: 1rem;
  width: 50px;
  fill: #fff;
  cursor: pointer;
  z-index: 30;
`;

const Modal = ({ children, title, size, background }) => {

  return (
    <>
      <ModalOverlay/>
        <ModalBlock size={size}>
        <CloseButton/>
          <h2>{title}</h2>
          <div>
            {children}
          </div>
        </ModalBlock>
    </>
  );
}

export default Modal;