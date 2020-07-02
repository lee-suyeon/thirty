import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Edit } from '@styled-icons/material/Edit';
import { Close } from '@styled-icons/material/Close';



const Content = styled.div`
    width: 100%;
    margin-bottom: 2rem;
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
        border-bottom: 2px solid #d4e2d4;
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
`
const EditButton = styled(Edit)`
  display: block;
  position: absolute;
  top: 0; right: 0;
  fill: ${({ theme }) => theme.colors.subColor};
  width: 30px;
  cursor: pointer;
  }  
  &:hover {
    fill:  ${({ theme }) => theme.colors.mainColor};
  }
`

const Note = ({ challenge, onEditChallenge }) => {
    console.log(challenge)
    return (
        <>
            <EditButton onClick={onEditChallenge}/>
            <Content>
                <h2>My Goal</h2>
                <div className="challenge-cont">{challenge.goal}</div>
            </Content>
            <Content>
                <h2>Challenge period</h2>
                <div className="challenge-cont">{challenge.startDate} ~ {challenge.endDate}</div>
                <span className="d-day">도전 종료일까지 0일 남았습니다</span>
            </Content>
            <Content>
                <h2>Motivate</h2>
                <div className="challenge-cont memo">{challenge.motivate}</div>
            </Content>
        </>
    )
}

export default Note;