import React, { Fragment } from 'react';
import MainPicture from '../components/MainPicture/MainPicture';
import Services from '../components/Services/Services';
import Benefits from '../components/Benefits/Benefits';
import Contacts from '../components/Contacts/Contacts';

const MainPage = ({ isDarkMode }) => {
  return (
    <Fragment>
      <main>
        <MainPicture />
        <Services isDarkMode={isDarkMode} />
        <Benefits isDarkMode={isDarkMode} />
        <Contacts isDarkMode={isDarkMode} />
      </main>
    </Fragment>
  );
};

export default MainPage;
