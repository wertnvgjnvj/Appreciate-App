// src/components/chatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "FruitBot",
  initialMessages: [
    createChatBotMessage("Hi! Ask me anything about fruits or add them to your cart!"),
    createChatBotMessage("Try commands like 'Tell me about apples' or 'Add apple to cart'.")
  ],
};

export default config;
