import React from 'react';
import CosmetologyCard from '../CosmetologyCard/CosmetologyCard';
import styles from './Cosmetology.module.css';

const Cosmetology = ({ isDarkMode, servicesData, title }) => {
  return (
    <div className={`${styles.cosmetology} container`}>
      <h2>{title}</h2>
      <div className={styles.cosmetology__cards}>
        {servicesData.map((service) => {
          return (
            <CosmetologyCard
              key={service.id}
              item={service.item}
              description={service.description}
              price={service.price}
              time={service.time}
              isDarkMode={isDarkMode}
            ></CosmetologyCard>
          );
        })}
      </div>
    </div>
  );
};

export default Cosmetology;
