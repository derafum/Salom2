import React from 'react';
import './UnitEconomics.css';

const UnitEconomics = () => {
  // Ссылка для встраивания таблицы, убедитесь, что правильно настроили публикацию таблицы
  const iframeSrc = 'https://docs.google.com/spreadsheets/d/1NOAz9B26pGjxWalsKkxxlE99K8VB6BW-/edit?usp=sharing&ouid=102845798273549706126&rtpof=true&sd=true';

  return (
    <div className="unit-economics">
      <h2>Юнит Экономика</h2>
      <iframe
        src={iframeSrc}
        frameBorder="0"
        className="google-sheet-iframe"
      >
        Ваш браузер не поддерживает iframe.
      </iframe>
    </div>
  );
};

export default UnitEconomics;
