

// src/components/FruitChatbot.js
import React from "react";
import Chatbot from "react-chatbot-kit";
import '../componentCss/Chat.css'; 

import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const FruitChatbot = () => {
  return (
    <div style={{ width: "300px", margin: "0 auto", marginTop: "50px" }}>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};

export default FruitChatbot;
