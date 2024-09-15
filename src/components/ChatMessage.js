import React from 'react';

const ChatMessage = ({ text, sender }) => {
  return (
    <div>
      <p><strong>{sender === 'user' ? 'You' : 'Bot'}:</strong> {text}</p>
    </div>
  );
};

export default ChatMessage;
