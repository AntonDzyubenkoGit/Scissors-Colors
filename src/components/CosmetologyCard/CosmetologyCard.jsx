import React from 'react';
import styles from './CosmetologyCard.module.css';

const CosmetologyCard = ({ item, description, price, time, isDarkMode }) => {
  return (
    <div
      className={
        isDarkMode ? styles.cosmetology__card : `${styles.cosmetology__card} ${styles.dark}`
      }
    >
      <p className={styles.cosmetology__item}>{item}</p>
      <div className={styles.cosmetology__description}>
        <p className={styles.cosmetology__text}>{description}</p>
        <p>Стоимость - от {price} рублей</p>
        <p>Длительность - от {time} минут</p>
      </div>
    </div>
  );
};

export default CosmetologyCard;
