// src/components/ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.cart = [];
    }
  
    // Handle detailed fruit information
    handleFruitInfo(fruit) {
      const fruitData = {
        apple: {
          description: "Apples are nutritious fruits that are high in fiber and Vitamin C. They are originally from Central Asia.",
          benefits: "They improve gut health, reduce the risk of heart disease, and promote weight loss.",
          taste: "Crispy and sweet."
        },
        banana: {
          description: "Bananas are tropical fruits that are high in potassium and Vitamin B6.",
          benefits: "Great for heart health, energy, and digestive health.",
          taste: "Soft and sweet."
        },
        orange: {
          description: "Oranges are citrus fruits that are rich in Vitamin C and antioxidants.",
          benefits: "Boosts the immune system and promotes healthy skin.",
          taste: "Tangy and sweet."
        },
        mango: {
          description: "Mangoes are juicy tropical fruits rich in Vitamin A and C, known as the 'king of fruits' in many cultures.",
          benefits: "Promotes healthy vision, boosts immunity, and aids digestion.",
          taste: "Sweet and creamy."
        }
      };
  
      const fruitInfo = fruitData[fruit] 
        ? `Description: ${fruitData[fruit].description}\nBenefits: ${fruitData[fruit].benefits}\nTaste: ${fruitData[fruit].taste}`
        : "I don't have information about that fruit.";
  
      const message = this.createChatBotMessage(fruitInfo);
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  
    // Handle adding to cart
    handleAddToCart(fruit) {
      if (this.cart.includes(fruit)) {
        const message = this.createChatBotMessage(`${fruit} is already in your cart.`);
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      } else {
        this.cart.push(fruit);
        const message = this.createChatBotMessage(`${fruit} has been added to your cart.`);
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      }
    }
  
    // Handle viewing the cart
    handleViewCart() {
      if (this.cart.length === 0) {
        const message = this.createChatBotMessage("Your cart is empty.");
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      } else {
        const cartItems = this.cart.join(", ");
        const message = this.createChatBotMessage(`Your cart contains: ${cartItems}`);
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      }
    }
  }
  
  export default ActionProvider;
  