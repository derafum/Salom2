import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Modal.css';

Modal.setAppElement('#root'); // Убедитесь, что это совпадает с вашим корневым элементом

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://81.94.156.136:8000/accounts/api/register/', {
        username: username,
        password: password,
        email: email
      });
      toast.success('Регистрация прошла успешно!');
      console.log('Регистрация прошла успешно:', response.data);
      onRequestClose();
    } catch (error) {
      toast.error('Ошибка при регистрации.');
      console.error('Ошибка при регистрации:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <label>
          Имя пользователя:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
