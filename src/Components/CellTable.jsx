import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Cell from './Cell';

const RightBox = styled.div`
    width: 65%;
`
//const dayNumbers = Array(30).fill().map((v, i) => i + 1);

const CellTable = ({ dispatch, onCellCount, days }) => {
    return (
        <RightBox>
            {days.map((v, i) => <Cell key={`${i}days`} days={v} dispatch={dispatch} onCellCount={onCellCount} />)}
        </RightBox>
    )
}

export default CellTable;