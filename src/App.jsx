import { Fragment, useState } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';
import StaffPage from './pages/StaffPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList = 'dark';
    } else {
      document.body.classList = '';
    }
  }

  return (
    <Fragment>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* <MainPage isDarkMode={isDarkMode} /> */}
      <StaffPage isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </Fragment>
  );
}

export default App;
