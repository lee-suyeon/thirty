import React, { memo } from 'react';
import Modal from './commons/Modal';
import Form from './Message/Form';

const StartChallenge = memo(({ visible }) => {

  if(!visible) return null;
  return (
    <Modal title="YOUR CHALLENGE">
      <Form/>
    </Modal>
  );
});

export default StartChallenge;