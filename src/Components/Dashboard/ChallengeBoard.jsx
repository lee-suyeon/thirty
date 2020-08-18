import React from 'react';
import styled from 'styled-components';
import Note from './Note';
import CounterBox from './CounterBox';
import CellTable from './CellTable';

const LeftBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28%;
  margin-right: 3%;
`;
const RightBox = styled.div`
  width: 65%;
`;

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
  );
}

export default ChallengeBoard;
