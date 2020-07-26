import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { TOGGLE_MODAL, ChallengeContext } from '../App';
import { InsertChartOutlined } from '@styled-icons/material/InsertChartOutlined';

const CurrentWrap = styled.div`
  position: relative;
  width: 100%;
`;
const CurrentBox = styled.div`
  position: relative;
  width: 100%;
  height: 195px;
  background-color: #f4f7f3;
  border: 1px solid #cfd7cd;
  padding: 1rem 2.5rem;
  margin-top: 1rem;
`;
const DayCounter = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;
  font-weight: 600;
  color: #447d53;
  em.current-count {
    display: block;
  }
  strong.total-count {
    display: block;
    text-align: right;
  }
`;
const Bar = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  width: 5px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  transform: translate(-50%, -50%) rotate(45deg);
`;
const Report = styled(InsertChartOutlined)`
  display: block;
  position: absolute;
  top: -5px; right: 0;
  width: 30px;
  fill: ${({ theme }) => theme.colors.subColor};
  cursor: pointer;

  &:hover {
    fill:  ${({ theme }) => theme.colors.mainColor};
  }
`;

const CounterBox = memo(() => {
  const { dispatch, count } = useContext(ChallengeContext);

  const onClickReport = () => {
    dispatch({ type: TOGGLE_MODAL, report: true });
  };

  return (
    <>
      <CurrentWrap>
        <h2>Current Count</h2>
        <Report onClick={onClickReport}/>
        <CurrentBox>
          <DayCounter>
            <em className="current-count">{count < 10 ? `0${count}` : count}</em>
            <Bar />
            <strong className="total-count">30</strong>
          </DayCounter>
        </CurrentBox>
      </CurrentWrap>
    </>
  );
});

export default CounterBox;