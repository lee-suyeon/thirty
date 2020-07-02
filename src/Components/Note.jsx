import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';



const Content = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    h2{
        color : #666;
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
    }
    div.challenge-cont{
        width: 100%;;
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

const Note = () => {
    return (
        <>
            <Content>
                <h2>My Goal</h2>
                <div className="challenge-cont">리액트 공부하기</div>
            </Content>
            <Content>
                <h2>Challenge period</h2>
                <div className="challenge-cont">2020-03-12 ~ 2020-04-13</div>
                <span className="d-day">도전 종료일까지 15일 남았습니다</span>
            </Content>
            <Content>
                <h2>Motivate</h2>
                <div className="challenge-cont memo">나는 오늘부터 달라지기로 결심했다 나는 오늘부터 달라지기로 결심했다</div>
            </Content>
        </>
    )
}

export default Note;