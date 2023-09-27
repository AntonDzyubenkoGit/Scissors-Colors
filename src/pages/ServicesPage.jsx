import React from 'react';
import Services from '../components/Services/Services';
import {
  haircutWomenData,
  haircutManData,
  hairColoring,
  makeup,
  solariumService,
  cosmetology,
  massage,
  tattooing,
} from '../data/detailService';
import Сoloring from '../components/Сoloring/Сoloring';
import Cosmetology from '../components/Cosmetology/Cosmetology';

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
      <Cosmetology isDarkMode={isDarkMode} servicesData={cosmetology} title={'Косметология'} />
      <Cosmetology isDarkMode={isDarkMode} servicesData={massage} title={'Массаж'} />
      <Сoloring isDarkMode={isDarkMode} servicesData={makeup} title={'Макияж'} />
      <Сoloring isDarkMode={isDarkMode} servicesData={solariumService} title={'Солярий'} />
      <Cosmetology isDarkMode={isDarkMode} servicesData={tattooing} title={'Татуаж'} />
    </main>
  );
};

export default ServicesPage;
