import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Services.module.css';

const Services = ({ isDarkMode, servicesData, title, linkText }) => {
  return (
    <div className={`${styles.services} container`}>
      <h1>{title}</h1>
      <div className={styles.services__cards}>
        {servicesData.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              image={service.image}
              serviceName={service.serviceName}
              isDarkMode={isDarkMode}
              link={service.link}
              linkText={linkText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
