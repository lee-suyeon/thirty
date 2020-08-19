import React from 'react';
import styled, { css } from 'styled-components';

const typeStyle = css`
  ${props =>
    props.type === 'primary' &&
    css`
      background-color: #4d55ff;
      color: #fff;

      &:hover {
        background-color: #646bff;
      }
    `}
`;

const StyledButton = styled.button`
  border-radius: 3px;
  border: 1px solid #4d55ff;
  cursor: pointer;
  margin-top: 1.5rem;
  color: #4d55ff;
  font-size: 0.825rem;
  font-weight: 500;
  padding: 0.45rem 1.2rem;
  transition: 0.2s;

  &:hover {
    background-color: #4d55ff;
    color: #fff;
  }

  & + & {
    margin-left: 2%;
  }

  ${typeStyle}
`;

const Button = ({ title, width, size, ...rest }) => {
  return (
    <>
      <StyledButton {...rest} width={width} size={size}>{title}</StyledButton>
    </>
  );
}

Button.defaultProps = {
  color: 'blue'
};


export default Button;