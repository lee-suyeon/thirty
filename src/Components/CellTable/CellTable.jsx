import React from 'react';
import Cell from './Cell';

const dayNumbers = Array(30).fill().map((v, i) => i + 1);

const CellTable = ({ dday }) => {
  return (
    <>
      {dayNumbers.map((v, i) => <Cell key={`${i + 1}days`} days={v} dday={dday} />)}
    </>
  );
}

export default CellTable;