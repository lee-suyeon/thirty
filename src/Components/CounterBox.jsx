import React, { useState, useRef, memo } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const CurrentBox = styled.div`
    position: relative;
    width: 100%;
    height: 230px;
    background-color: #f4f7f3;
    border: 1px solid #cfd7cd;
    padding: 1rem;
`

const DayCounter = styled.div`
    width: 100%;
    height: 100%;
    font-size: 5rem;
    font-weight: 600;
    color: #447d53;
    em.current-count{
        position: absolute;
        bottom: 5.6rem; right: 8.75rem;
    }
    strong.total-count{
        position: absolute;
        bottom: 1rem; right: 1rem;
    }
    strong.total-count:before{
        content: '';
        width: 5px;
        height: 100px;
        background-color: #447d53;
        position: absolute;
        bottom: 1.9rem; right: 7rem;
        transform: rotate(45deg);
    }
`

const CounterBox = memo(({ count }) => {
    console.log("count", count)
    return (
        <>
            <CurrentBox>
                <h2>Current Count</h2>
                <DayCounter>
                    <em className="current-count">{count < 10 ? `0${count}` : count}</em>
                    <strong className="total-count">30</strong>
                </DayCounter>
            </CurrentBox>
        </>
    )
});

export default CounterBox;