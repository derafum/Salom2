import React from 'react';
import './GoogleSpreadsheet.css'; // Подключаем CSS файл

const GoogleSpreadsheet = () => {
  // Убедитесь, что ссылка корректна и указывает на опубликованную версию таблицы
  const iframeSrc = 'https://docs.google.com/spreadsheets/d/1oSz0ruFkDKquEkPSjQuT9M7hcKOilXzA/edit?gid=2077659328#gid=2077659328';

  return (
    <div className="spreadsheet-container">
      <iframe
        src={iframeSrc}
        className="google-spreadsheet-iframe"
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
