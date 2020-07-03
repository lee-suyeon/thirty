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

const DashBoard = ({ challenge, onEditChallenge}) => {
    return (
        <>
            <LeftBox>
                <Note 
                    challenge={challenge}
                    onEditChallenge={onEditChallenge}
                    />
                <CounterBox />
            </LeftBox>
        </>
   )
}

export default DashBoard;
