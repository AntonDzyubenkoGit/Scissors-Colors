import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import MainPicture from '../components/MainPicture/MainPicture';
import Services from '../components/Services/Services';

const MainPage = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Fragment>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <MainPicture />
        <Services isDarkMode={isDarkMode} />
      </main>
    </Fragment>
  );
};

export default MainPage;
