import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';


const getToday = () => {
    let today = new Date();
    let options = { weekday: 'long'};
    let day = new Intl.DateTimeFormat('en-US', options).format(today);
    return day;
}

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

const CounterBox = ({ count }) => {
    const [today, setToday] = useState(getToday());

    return (
        <>
            <CurrentBox>
                <h2>Current Count</h2>
                <DayCounter>
                    <em className="current-count">{count}</em>
                    <strong className="total-count">30</strong>
                </DayCounter>
            </CurrentBox>
        </>
    )
}

export default CounterBox;