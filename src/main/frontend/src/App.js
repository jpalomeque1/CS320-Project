import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import {API_URL} from "./config";

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Validation for letters only in names and proper email format
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Frontend validation
        if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
            setMessage('First and last names should contain letters only.');
            return;
        }

        if (!emailPattern.test(email)) {
            setMessage('Please enter a valid email.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/hello/personalized`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ first: firstName, last: lastName, email }),
            });

            if (!response.ok) throw new Error('Failed to process request');

            const text = await response.text();
            setMessage(text);
        } catch (error) {
            setMessage('An error occurred: ' + error.message);
        }
    };

    return (
        <div className="app-container">
            <h1>Subscribe</h1>

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
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default App;
