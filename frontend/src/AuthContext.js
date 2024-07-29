import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8000/accounts/api/user/', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setIsAuthenticated(true);
          setUser(response.data);
          setHasAccess(response.data.has_access);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    fetchUserData();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/accounts/api/token/', { username, password });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      const userResponse = await axios.get('http://localhost:8000/accounts/api/user/', {
        headers: {
          Authorization: `Bearer ${response.data.access}`
        }
      });

      setIsAuthenticated(true);
      setUser(userResponse.data);
      setHasAccess(userResponse.data.has_access);
      return userResponse.data.has_access;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAuthenticated(false);
    setUser(null);
    setHasAccess(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, hasAccess, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
