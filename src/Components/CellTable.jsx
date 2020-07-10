import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Cell from './Cell';


const dayNumbers = Array(30).fill().map((v, i) => i + 1);

const CellTable = ({ dday, checkState }) => {
    return (
        <>
            {dayNumbers.map((v, i) => <Cell key={`${i + 1}days`} days={v} dday={dday} checkState={checkState} />)}
        </>
    )
}

export default CellTable;