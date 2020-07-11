import React, { memo, useState, useCallback, useContext, useEffect } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { ChallengeContext, CHECKED_CELL, CANCELED_CELL } from '../App';

const colorStyles = css`
  ${props =>
    props.done &&
    css`
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: #fff;
    `}
`;

const Circle = styled.div`
    display: inline-block;
    position: relative;
    width: 105px;
    height: 105px;
    border: 1px solid #447d53;
    border-radius: 50%;
    margin: 0 0.7rem 0.6rem 0;
    cursor: pointer;
    color: #c5c5c5;

    ${colorStyles}
`
const Days = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: 300;
`




const Cell = memo(({ days }) => {
    const { dispatch, check } = useContext(ChallengeContext);
    const [done, setDone] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if(check){
            setTimeout(() => {
                setAnimate(false);
            }, 600)
        }
    }, [check, animate]);

    const onClickCell = useCallback(() => {
        setAnimate(true);
        if(animate && check){
            return;
        } 
        if(done) {
            setDone(false);
            setAnimate(true);
            dispatch({ type: CANCELED_CELL });
        } else {
            setDone(true);
            setAnimate(true);
            dispatch({ type: CHECKED_CELL });
        }
      }, [done, animate]);

    return (
        <>
            <Circle onClick={onClickCell} done={done}>
                <Days>{days}</Days>
            </Circle>
        </>
    )
});

export default Cell;