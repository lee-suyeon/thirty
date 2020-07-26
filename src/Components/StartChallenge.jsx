import React, { memo } from 'react';
import Modal from './Modal';
import Form from './Form';

const StartChallenge = memo(({ visible }) => {

  if(!visible) return null;
  return (
    <Modal title="YOUR CHALLENGE">
      <Form/>
    </Modal>
  );
});

export default StartChallenge;