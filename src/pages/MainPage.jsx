import React, { Fragment } from 'react';
import MainPicture from '../components/MainPicture/MainPicture';
import Services from '../components/Services/Services';

const MainPage = ({ isDarkMode }) => {
  return (
    <Fragment>
      <main>
        <MainPicture />
        <Services isDarkMode={isDarkMode} />
      </main>
    </Fragment>
  );
};

export default MainPage;
