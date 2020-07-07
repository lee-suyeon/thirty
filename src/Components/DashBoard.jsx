import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../Style/Theme';
import Note from './Note';
import CounterBox from './CounterBox';

const LeftBox = styled.div`
    position: relative;
    width: 28%;
    margin-right: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DashBoard = ({ challenge, count, dispatch }) => {
    return (
        <>
            <LeftBox>
                <Note
                    dispatch={dispatch}
                    challenge={challenge}
                    />
                <CounterBox count={count}/>
            </LeftBox>
        </>
   )
}

export default DashBoard;
