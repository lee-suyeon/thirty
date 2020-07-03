import React, { memo } from 'react';
import styled, { ThemeProvider } from 'styled-components';


const Circle = styled.div`
    display: inline-block;
    position: relative;
    width: 105px;
    height: 105px;
    border: 1px solid #447d53;
    border-radius: 50%;
    margin: 0 0.7rem 0.6rem 0;

    em.days{
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        font-weight: 300;
        color: #c5c5c5;
    }

`

const Cell = memo(({ days  }) => {
    return (
        <>
            <Circle>
                <em className="days">{days}</em>
            </Circle>
        </>
    )
});

export default Cell;