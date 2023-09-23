import { Fragment, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import Header from './components/Header/Header';

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
      <MainPage isDarkMode={isDarkMode} />
    </Fragment>
  );
}

export default App;
