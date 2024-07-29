import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './Modal.css';

Modal.setAppElement('#root'); // Убедитесь, что это совпадает с вашим корневым элементом

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const hasAccess = await login(username, password);
      toast.success('Вход выполнен успешно!');
      onRequestClose();
      if (hasAccess) {
        navigate('/dashboard');
      } else {
        toast.error('Нет доступа. Свяжитесь с администратором.');
      }
    } catch (error) {
      toast.error('Ошибка при входе.');
      console.error('Ошибка при входе:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Вход в аккаунт</h2>
      <form onSubmit={handleLogin}>
        <label>
          Имя пользователя:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Войти</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
