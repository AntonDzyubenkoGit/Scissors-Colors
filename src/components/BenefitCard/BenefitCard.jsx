import React from 'react';
import styles from './BenefitCard.module.css';

const BenefitCard = ({ name, description, isDarkMode }) => {
  return (
    <div
      className={isDarkMode ? `${styles.benefit__card}` : `${styles.benefit__card} ${styles.dark}`}
    >
      <p className={styles.benefit__name}>{name}</p>
      <p className={styles.benefit__text}>{description}</p>
    </div>
  );
};

export default BenefitCard;
