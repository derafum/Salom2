import React from 'react';

const GoogleSpreadsheet = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="https://docs.google.com/spreadsheets/d/1oSz0ruFkDKquEkPSjQuT9M7hcKOilXzA/edit?gid=2077659328#gid=2077659328"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
