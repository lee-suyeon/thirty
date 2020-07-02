import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
   width: 100%;
   height: 60px;
   background-color: #447d53;
   border-radius: 5px;
   cursor: pointer;
   margin-top: 1.5rem;
   color: #fff;
   font-size: 1.8rem;
   font-weight: 500;
   letter-spacing: 2px;
`

const Button = ({ title, type }) => {
   return (
      <>
         <SubmitButton>{title}</SubmitButton>
      </>
   )
}

export default Button;