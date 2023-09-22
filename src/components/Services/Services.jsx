import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Services.module.css';
import servicesData from '../../data/services';

console.log(servicesData);

const Services = ({ isDarkMode }) => {
  return (
    <div className={`${styles.services} container`}>
      <h1>Услуги нашего салона</h1>
      <div className={styles.services__cards}>
        {servicesData.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              image={service.image}
              serviceName={service.serviceName}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
