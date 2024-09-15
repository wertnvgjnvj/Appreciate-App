import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);

    const botResponse = getBotResponse(message);
    setMessages([...messages, { text: message, sender: 'user' }, { text: botResponse, sender: 'bot' }]);
  };

  const getBotResponse = (message) => {
    const fruitInfo = {
      apple: "Apples are sweet, crunchy fruits that come in a variety of colors, including red, green, and yellow.",
      banana: "Bananas are elongated, soft fruits with a yellow skin and a sweet flavor.",
      orange: "Oranges are citrus fruits with a bright orange skin and a tangy flavor.",
    };
    const fruit = message.toLowerCase().replace('info about ', '');
    return fruitInfo[fruit] || "Sorry, I don't have information about that fruit.";
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;
