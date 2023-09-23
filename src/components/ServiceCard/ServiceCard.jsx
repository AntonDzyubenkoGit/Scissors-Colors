import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ image, serviceName, isDarkMode }) => {
  return (
    <div className={isDarkMode ? styles.service__card : `${styles.service__card} ${styles.dark}`}>
      <div style={{ overflow: 'hidden' }}>
        <img src={image} alt="women's haircuts" className={styles.service__img} />
      </div>
      <p className={styles.service__name}>{serviceName}</p>
      <a href="#" className={styles.service__link}>
        подробнее
      </a>
    </div>
  );
};

export default ServiceCard;
