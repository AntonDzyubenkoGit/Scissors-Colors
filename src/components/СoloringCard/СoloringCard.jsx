import React from 'react';
import styles from './СoloringCard.module.css';

const СoloringCard = ({ image, item, description, price, time, isDarkMode }) => {
  return (
    <div className={isDarkMode ? styles.coloring__card : `${styles.coloring__card} ${styles.dark}`}>
      <p className={styles.coloring__item}>{item}</p>
      <div className={styles.card__container}>
        <div className={styles.coloring__img}>
          <img src={image} alt={item} />
        </div>
        <div className={styles.coloring__description}>
          <p className={styles.coloring__text}>{description}</p>
          <p>
            Стоимость - от {price} рублей {price < 100 ? '/ минута' : ''}
          </p>
          <p>Длительность процедуры - от {time} минут</p>
        </div>
      </div>
    </div>
  );
};

export default СoloringCard;
