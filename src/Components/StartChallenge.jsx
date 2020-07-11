import React, { useState, useRef, memo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Modal from './Modal';
import Form from './Form';

const StartChallenge = memo(({ visible }) => {

    if(!visible) return null;
    return (
        <Modal 
            title="YOUR CHALLENGE"
            >
            <Form/>
        </Modal>
    )
});

export default StartChallenge;