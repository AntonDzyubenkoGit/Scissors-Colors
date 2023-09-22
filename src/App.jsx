import { Fragment, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage';

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
      <MainPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </Fragment>
  );
}

export default App;
