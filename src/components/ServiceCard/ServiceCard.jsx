import React from 'react';
import styles from './ServiceCard.module.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, serviceName, isDarkMode, linkText }) => {
  return (
    <div className={isDarkMode ? styles.service__card : `${styles.service__card} ${styles.dark}`}>
      <div style={{ overflow: 'hidden' }}>
        <img src={image} alt="women's haircuts" className={styles.service__img} />
      </div>
      <p className={styles.service__name}>{serviceName}</p>
      <Link to="/services" className={styles.service__link}>
        {linkText}
      </Link>
    </div>
  );
};

export default ServiceCard;
