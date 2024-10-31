import React, { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Frontend validation
        if (!firstName || !lastName || !validateEmail(email)) {
            setError("All fields are required and email must be valid.");
            return;
        }
        setError(''); // Clear any previous error message

        try {
            const response = await fetch('http://localhost:8080/hello/personalized', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first: firstName, last: lastName, email }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

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

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>{message}</p>
        </div>
    );
}

export default App;