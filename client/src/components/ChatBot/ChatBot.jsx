import React, { useState } from 'react';
import './ChatBot.css';

const faq = {
  "How to register?": "Go to the top right corner and click on 'Register'. Fill the form to create your account.",
  "How to post a listing?": "First log in. Then click on 'Add Listing' in the menu and fill out the details.",
  "How to contact a seller?": "Click on a listing, and you'll see the seller’s contact info or chat option.",
  "Is it free to post a property?": "Yes, posting properties is currently 100% free!",
  "Where can I see my listings?": "After logging in, go to 'My Listings' from your profile."
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! Ask me anything about the site.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    const botReply = faq[input.trim()] || "Sorry, I don't know the answer to that yet.";

    setMessages([...messages, userMessage, { type: 'bot', text: botReply }]);
    setInput('');
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>💬</button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">Support Bot</div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.type}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;