import React, { useContext, memo, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ChallengeContext, TOGGLE_MODAL } from '../App';
import { Edit } from '@styled-icons/material/Edit';



const Content = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  h2{
    color : #666;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  div.challenge-cont{
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
    padding: 0 0.2rem;
  }
  span.d-day{
    display: block;
    text-align: center; 
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  div.memo {
    font-size: 1.2rem;
  }
`;
const EditButton = styled(Edit)`
  display: block;
  position: absolute;
  top: 0; right: 0;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.subColor};
  width: 30px;
  &:hover {
    fill:  ${({ theme }) => theme.colors.mainColor};
  }
`;

const Note = memo(() => {
  const { challenge, dispatch } = useContext(ChallengeContext);
  const { goal, startDate, endDate, motivate } = challenge;

  const onEditForm = useCallback(() => {
      dispatch({ type: TOGGLE_MODAL, form: true });
  }, []);

  return (
    <>
      <EditButton onClick={onEditForm}/>
      <Content>
        <h2>My Goal</h2>
        <div className="challenge-cont">{goal}</div>
      </Content>
      <Content>
        <h2>Challenge period</h2>
        <div className="challenge-cont">{startDate} - {endDate}</div>
      </Content>
      <Content>
        <h2>Motivate</h2>
        <div className="challenge-cont memo">{motivate}</div>
      </Content>
    </>
  );
});

export default Note;