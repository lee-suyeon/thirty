import React from 'react';
import styled from 'styled-components';
import Button from '../commons/Button';

const Board = styled.div`
  position: relative;
  width: 32%;
  height: 300px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 2rem;
  border: 1px solid #eeeae6;
  margin-bottom: 50px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  p {
    font-size: 1rem;
    color: #555;
    margin-top: 2rem;
  }
`;

function GoalBoard() {
  return (
    <Board>
      <h3>도전</h3>
      <div>
        <em style={{ fontSize: "3rem"}}>🙅🏻</em>
        <p>아직 진행중인 도전이 없습니다.</p>
        <Button 
          title="도전 시작"
          />
      </div>
    </Board>
  )
}

export default GoalBoard;
