import React from 'react';
import styled, { css } from 'styled-components';

const sizeStyles = css`
  ${props =>
    props.size === 'small' &&
    css`
      width: 49%;
      height: 55px;
      font-size: 1.5rem;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 49%;
      height: 55px;
      font-size: 1.4rem;
    `}
`;
const SubmitButton = styled.button`
  width: ${props => props.width || '100%'};
  height: 60px;
  background-color: #447d53;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 2px;

  & + & {
    margin-left: 2%;
  }
  
  ${sizeStyles}
`;

const Button = ({ title, width, size, ...rest }) => {
  return (
    <>
      <SubmitButton {...rest} width={width} size={size}>{title}</SubmitButton>
    </>
  );
}

export default Button;