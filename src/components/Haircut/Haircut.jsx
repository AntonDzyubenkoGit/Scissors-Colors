import React from 'react';
import styles from './Haircut.module.css';

const Haircut = ({ haircut, isDarkMode }) => {
  const {
    serviceName: title,
    price,
    time,
    bigImage: image,
    description,
    history,
    features,
  } = haircut;

  return (
    <div className={`${styles.haircut} container`}>
      <h1>{title}</h1>
      <div className={styles.haircut__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.haircut__important}>
        <p>Стоимость - от {price} рублей</p>
        <p>Длительность процедуры - от {time} минут</p>
      </div>
      <div className={styles.haircut__cards}>
        <div
          className={isDarkMode ? styles.haircut__card : `${styles.haircut__card} ${styles.dark}`}
        >
          <p className={styles.haircut__item}>Краткое описание</p>
          <p>{description}</p>
        </div>
        <div
          className={isDarkMode ? styles.haircut__card : `${styles.haircut__card} ${styles.dark}`}
        >
          <p className={styles.haircut__item}>Историческая справка</p>
          <p>{history}</p>
        </div>
      </div>
      <div
        className={
          isDarkMode ? styles.haircut__features : `${styles.haircut__features} ${styles.dark}`
        }
      >
        <p className={styles.haircut__item}>Особенности</p>
        <ul className={styles.features__list}>
          {features.map((feature) => {
            return (
              <li key={feature.id}>
                {feature.id}. {feature.info}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Haircut;
