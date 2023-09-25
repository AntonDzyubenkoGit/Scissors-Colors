import React from 'react';
import Services from '../components/Services/Services';
import { haircutWomenData, haircutManData } from '../data/detailService';

const ServicesPage = ({ isDarkMode }) => {
  return (
    <main>
      <Services
        isDarkMode={isDarkMode}
        servicesData={haircutWomenData}
        title={'Женские стрижки'}
        linkText={'всё о стрижке'}
      />
      <Services
        isDarkMode={isDarkMode}
        servicesData={haircutManData}
        title={'Мужские стрижки'}
        linkText={'всё о стрижке'}
      />
    </main>
  );
};

export default ServicesPage;
