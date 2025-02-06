import React, { useState } from 'react';
import './MessagingPage.css';

function MessagingPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Handle sending messages
  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: 'You', // For now, it's fixed as 'You'
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className="messaging-container">
      <div className="header">
        <h2>Student Connect</h2>
      </div>
      
      <div className="message-window">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.sender === 'You' ? 'your-message' : 'other-message'
            }`}
          >
            <span className="message-sender">{message.sender}:</span>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
      
      <div className="message-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default MessagingPage;
