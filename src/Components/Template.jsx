import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../Style/Theme';

const Header = styled.header`
  width: 100%;
  height: 4.2rem;
  color: #ffffff;
  font-style: italic;
  text-align: right;
  padding: 2.4rem 0.9rem 0 0;
  background-color: ${({ theme }) => theme.colors.mainColor}
`
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 600;
  margin: 3rem 0 2.2rem;
`
const Board = styled.div`
   position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 650px;
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.02);
  padding: 2.5rem;
  margin-bottom: 50px;
`



const Template = ({ children }) => {
   return (
      <>
         <ThemeProvider theme={theme}>
            <Header>You will never change your life until you change something you do daily.</Header>
            <Container>
               <Title>30days</Title>
               <Board>
                  {children}
               </Board>
            </Container>
         </ThemeProvider>
      </>
   )
}

export default Template;
