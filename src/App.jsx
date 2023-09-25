import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';
import StaffPage from './pages/StaffPage';
import ServicesPage from './pages/ServicesPage';
import FeedbackPage from './pages/FeedbackPage';
import HaircutPage from './pages/HaircutPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkMode = localStorage.getItem('scissor_mode');

    if (checkMode === 'true') {
      setIsDarkMode(false);
      document.body.classList = 'dark';
    } else {
      setIsDarkMode(true);
      document.body.classList = '';
    }
  }, []);

  function toggleDarkMode() {
    if (isDarkMode) {
      document.body.classList = 'dark';
      localStorage.setItem('scissor_mode', JSON.stringify(isDarkMode));
    } else {
      document.body.classList = '';
      localStorage.setItem('scissor_mode', JSON.stringify(isDarkMode));
    }

    setIsDarkMode(!isDarkMode);
  }

  return (
    <BrowserRouter>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<MainPage isDarkMode={isDarkMode} />} />
        <Route path="/staff" element={<StaffPage isDarkMode={isDarkMode} />} />
        <Route path="/services" element={<ServicesPage isDarkMode={isDarkMode} />} />
        <Route path="/feedback" element={<FeedbackPage isDarkMode={isDarkMode} />} />
        <Route path="/haircut/:id" element={<HaircutPage isDarkMode={isDarkMode} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </BrowserRouter>
  );
}

export default App;
