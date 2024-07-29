import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import logo from './Images/logo.png';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const handleLogout = () => {
    logout();
    toast.info('Вы вышли из аккаунта.');
  };

  return (
    <header className="header">
      <ToastContainer />
      <div className="logo-container">
        <div id="home" className="logo">Автоматизация финансов Wildberries</div>
      </div>
      <nav className="navigation">
        {/* Можно добавить навигационные ссылки здесь */}
      </nav>
      {isAuthenticated ? (
        <div className="user-info">
          <span>Здравствуйте, {user?.username}</span>
          <button className="logoutButton" onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <div>
          <button className="loginButton" onClick={openLoginModal}>Войти</button>
          <button className="registerButton" onClick={openRegisterModal}>Регистрация</button>
        </div>
      )}
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
      />
      <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={closeRegisterModal} />
    </header>
  );
};

export default Header;
