import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for navigation

function App() {
    // useState for first name, last name, and message
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission and fetch the message
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload on form submit
        try {
            const response = await fetch('/hello/personalized', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first: firstName, last: lastName }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch the personalized greeting');
            }

            const text = await response.text();
            setMessage(text);
        } catch (error) {
            setMessage('An error occurred: ' + error.message);
        }
    };

    return (
        <div className="app-container">
            <h1>Subscribe</h1> {/* Changed from "Personalized Greeting" to "Subscribe" */}

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