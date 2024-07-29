import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate, Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import Dashboard from './Dashboard';
import NoAccess from './NoAccess';
import UnitEconomics from './UnitEconomics';
import { AuthProvider, AuthContext } from './AuthContext';
import './App.css';
import GoogleSpreadsheet from "./GoogleSpreadsheet";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/unit-economics" element={<PrivateRoute />}>
                <Route path="/unit-economics" element={<UnitEconomics />} />
              </Route>

              <Route path="/google-spreadsheet" element={<PrivateRoute />}>
                <Route path="/google-spreadsheet" element={<GoogleSpreadsheet />} />
              </Route>
              {/* Добавьте другие маршруты здесь */}
            </Routes>
          </main>
          <Footer />
          <LoginModal />
          <RegisterModal />
        </div>
      </Router>
    </AuthProvider>
  );
};

const PrivateRoute = () => {
  const { isAuthenticated, hasAccess } = React.useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return hasAccess ? <Outlet /> : <NoAccess />;
};

export default App;
