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
import checkMode from './utils/checkMode';
import UseScrollToTop from './utils/useScrollToTop';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    checkMode(setIsDarkMode);
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
      <UseScrollToTop />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<MainPage isDarkMode={isDarkMode} />} />
        <Route path="/staff" element={<StaffPage isDarkMode={isDarkMode} />} />
        <Route path="/services" element={<ServicesPage isDarkMode={isDarkMode} />} />
        <Route path="/feedback" element={<FeedbackPage isDarkMode={isDarkMode} />} />
        <Route
          path="/haircut/:link"
          element={<HaircutPage isDarkMode={isDarkMode} />}
          exact={true}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </BrowserRouter>
  );
}

export default App;
