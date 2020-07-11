import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../Style/Theme';
import Note from './Note';
import CounterBox from './CounterBox';
import CellTable from './CellTable';

const LeftBox = styled.div`
    position: relative;
    width: 28%;
    margin-right: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const RightBox = styled.div`
    width: 65%;
`


const ChallengeBoard = ({ visible, count }) => {


   if(!visible) return null;
   return (
      <>
         <LeftBox>
            <Note />
            <CounterBox count={count}/>
         </LeftBox>
         <RightBox>
            <CellTable />
         </RightBox>
      </>
   )
}

export default ChallengeBoard;
