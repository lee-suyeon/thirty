import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Cell from './Cell';

const RightBox = styled.div`
    width: 65%;
`

const CellTable = ({ dayNumbers }) => {
    console.log("dayNumbers", dayNumbers)

    return (
        <RightBox>
            {dayNumbers.map((v, i) => <Cell key={`${i}days`} days={v}/>)}
        </RightBox>
    )
}

export default CellTable;