import React, { useState } from 'react';
import './App.css';  // Import your CSS file

function App() {
  // useState for first name, last name, and message
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission and fetch the message
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submit
    const response = await fetch('/hello/personalized', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first: firstName, last: lastName })
    });

    const text = await response.text();
    setMessage(text);
  };

  return (
      <div className="app-container">
        <h1>Personalized  Greeting</h1>

        <form onSubmit={handleSubmit} className="greeting-form">
          <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
          />
          <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
          />
          <button type="submit">Submit</button>
        </form>

        <p>{message}</p>
      </div>
  );
}

export default App;

