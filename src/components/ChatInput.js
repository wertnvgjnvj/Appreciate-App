import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a fruit..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">Send</Button>
    </Form>
  );
};

export default ChatInput;
