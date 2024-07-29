// src/Calculator.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Calculator() {
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        const fetchAccess = async () => {
            try {
                const response = await axios.get('/accounts/api/user/', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setHasAccess(response.data.has_access);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAccess();
    }, []);

    if (!hasAccess) {
        return <div>You need access from the administrator.</div>;
    }

    return <div>Calculator Content</div>;
}

export default Calculator;
