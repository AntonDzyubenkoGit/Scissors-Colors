import React, { Fragment } from 'react';
import MainPicture from '../components/MainPicture/MainPicture';
import Services from '../components/Services/Services';
import Benefits from '../components/Benefits/Benefits';
import Contacts from '../components/Contacts/Contacts';

import servicesData from '../data/services';

const MainPage = ({ isDarkMode }) => {
  return (
    <main>
      <MainPicture />
      <Services
        isDarkMode={isDarkMode}
        servicesData={servicesData}
        title={'Услуги нашего салона'}
        linkText={'подробнее'}
      />
      <Benefits isDarkMode={isDarkMode} />
      <Contacts isDarkMode={isDarkMode} />
    </main>
  );
};

export default MainPage;
