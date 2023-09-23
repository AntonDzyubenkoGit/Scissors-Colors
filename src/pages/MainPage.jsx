import React, { Fragment } from 'react';
import MainPicture from '../components/MainPicture/MainPicture';
import Services from '../components/Services/Services';
import Benefits from '../components/Benefits/Benefits';

const MainPage = ({ isDarkMode }) => {
  return (
    <Fragment>
      <main>
        <MainPicture />
        <Services isDarkMode={isDarkMode} />
        <Benefits isDarkMode={isDarkMode} />
      </main>
    </Fragment>
  );
};

export default MainPage;
