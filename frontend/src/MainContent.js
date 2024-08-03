import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainContent.css';
import placeholderImage from './Images/stats.jpg';

const MainContent = () => {
  const navigate = useNavigate();

  return (
      <div className="mainContent">
          <div className="contentBlock">
              <p className="subtitle">Платформа, предназначеная <br/> для управления бизнес-процессами <br/> и
                  экономическими расчетами <br/> на <b>Wildberries</b></p>
              <div className="buttonContainer">
                  <Link to="/unit-economics" className="mainButton">Юнит Экономика</Link>
                  <Link to="/google-spreadsheet" className="mainButton">Еженедельный отчет</Link>
              </div>

              <div className="pricingContainer">
                  <h3>Тарифы</h3>
                  <div className="pricingOptionContainer">
                      <div className="pricingOption">
                          <h4>Стандарт</h4>
                          <p>1 месяц <br/> 1000р</p>
                      </div>
                      <div className="pricingOption">
                          <h4>Премиум</h4>
                          <p>3 месяца  2500р</p>
                      </div>
                      <div className="pricingOption">
                          <h4>Вип</h4>
                          <p>6 месяцев  5000р</p>
                      </div>
                  </div>
              </div>

          </div>
          <img src={placeholderImage} alt="Фото"/>

      </div>
  );
};

export default MainContent;
