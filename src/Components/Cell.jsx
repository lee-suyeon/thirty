import React, { memo, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

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

    em.days{
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        font-weight: 300;
    }

    ${colorStyles}
`

const Cell = memo(({ days, onCountCell }) => {
    const [done, setDone] = useState(false);

    const onClickCircle = () => {
        setDone(prev => !prev)
        onCountCell(done);
      };

    return (
        <>
            <Circle onClick={onClickCircle} done={done}>
                <em className="days">{days}</em>
            </Circle>
        </>
    )
});

export default Cell;