import React from 'react';
import Services from '../components/Services/Services';
import {
  haircutWomenData,
  haircutManData,
  hairColoring,
  makeup,
  solariumService,
} from '../data/detailService';
import Сoloring from '../components/Сoloring/Сoloring';

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
      <Сoloring isDarkMode={isDarkMode} servicesData={hairColoring} title={'Окрашивание волос'} />
      <Сoloring isDarkMode={isDarkMode} servicesData={makeup} title={'Макияж'} />
      <Сoloring isDarkMode={isDarkMode} servicesData={solariumService} title={'Солярий'} />
    </main>
  );
};

export default ServicesPage;
