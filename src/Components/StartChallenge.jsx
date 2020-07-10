import React, { useState, useRef, memo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Modal from './Modal';
import Form from './Form';

const StartChallenge = memo(({ onToggleModal }) => {
    return (
        <Modal 
            title="YOUR CHALLENGE"
            >
            <Form/>
        </Modal>
    )
});

export default StartChallenge;