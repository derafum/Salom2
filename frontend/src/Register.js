// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [telegramAccount, setTelegramAccount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/accounts/api/register/', {
                username,
                password,
                telegram_account: telegramAccount,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                Telegram Account:
                <input type="text" value={telegramAccount} onChange={(e) => setTelegramAccount(e.target.value)} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
