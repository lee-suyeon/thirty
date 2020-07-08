import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Cell from './Cell';

const RightBox = styled.div`
    width: 65%;
`
const dayNumbers = Array(30).fill().map((v, i) => i + 1);

const CellTable = ({ dispatch, onCellCount, dday, checkState }) => {
    return (
        <RightBox>
            {dayNumbers.map((v, i) => <Cell key={`${i}days`} days={v} dispatch={dispatch} dday={dday} checkState={checkState} onCellCount={onCellCount} />)}
        </RightBox>
    )
}

export default CellTable;