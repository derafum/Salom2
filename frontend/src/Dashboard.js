import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import placeholderImage from "./Images/img.jpg";
import placeholderImage2 from "./Images/unit.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Личный кабинет</h2>
      <div className="contentContainer">
        <div className="section">
          <Link to="/unit-economics" className="dashboardButton">Юнит Экономика</Link>
          <img src={placeholderImage2} alt="Юнит Экономика" className="sectionImage"/>
        </div>
        <div className="section">
          <Link to="/google-spreadsheet" className="dashboardButton">Еженедельный отчет</Link>
          <img src={placeholderImage} alt="Еженедельный отчет" className="sectionImage"/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
