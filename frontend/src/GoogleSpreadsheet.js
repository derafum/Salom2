import React from 'react';

const GoogleSpreadsheet = () => {
  // Убедитесь, что ссылка корректна и указывает на опубликованную версию таблицы
  const iframeSrc = 'https://docs.google.com/spreadsheets/d/1oSz0ruFkDKquEkPSjQuT9M7hcKOilXzA/edit?gid=2077659328#gid=2077659328';

  return (
    <div style={{ height: '85vh', width: '100%' }}>
      <iframe
        src={iframeSrc}
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
