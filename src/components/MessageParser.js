// src/components/MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("apple")) {
        if (lowerCaseMessage.includes("add to cart")) {
          this.actionProvider.handleAddToCart("apple");
        } else {
          this.actionProvider.handleFruitInfo("apple");
        }
      } else if (lowerCaseMessage.includes("banana")) {
        if (lowerCaseMessage.includes("add to cart")) {
          this.actionProvider.handleAddToCart("banana");
        } else {
          this.actionProvider.handleFruitInfo("banana");
        }
      } else if (lowerCaseMessage.includes("orange")) {
        if (lowerCaseMessage.includes("add to cart")) {
          this.actionProvider.handleAddToCart("orange");
        } else {
          this.actionProvider.handleFruitInfo("orange");
        }
      } else if (lowerCaseMessage.includes("mango")) {
        if (lowerCaseMessage.includes("add to cart")) {
          this.actionProvider.handleAddToCart("mango");
        } else {
          this.actionProvider.handleFruitInfo("mango");
        }
      } else if (lowerCaseMessage.includes("view cart")) {
        this.actionProvider.handleViewCart();
      } else {
        const message = "I didn't understand that. You can ask me about fruits or add them to your cart!";
        this.actionProvider.handleUnknownCommand(message);
      }
    }
  }
  
  export default MessageParser;
  