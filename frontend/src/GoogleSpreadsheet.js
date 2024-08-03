import React from 'react';

const GoogleSpreadsheet = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="https://docs.google.com/spreadsheets/d/1oSz0ruFkDKquEkPSjQuT9M7hcKOilXzA/edit?usp=sharing&ouid=102845798273549706126&rtpof=true&sd=true"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
