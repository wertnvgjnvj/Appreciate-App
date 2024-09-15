import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Chatbot from './components/Chatbot';
import Translate from './components/translate';
import About from './components/about';
import Login from './components/login';
import Register from './components/register';
import OtpScreen from './components/otp';
import Setup from './components/setup';
import FAQSection from './components/FAQSection'
import StyledPage from './components/Styled';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Show login page first */}
        <Route path="/home" element={<Home />} /> {/* Home page after login */}
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/Styled" element={<StyledPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/otp' element={<OtpScreen />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/FAQSection" element={<FAQSection />} />
      </Routes>
    </Router>
  );
}

export default App;
