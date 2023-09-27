import React, { Fragment } from 'react';
import styles from './FeedbackCard.module.css';

const FeedbackCard = ({ id, name, formatDate, comment, isDarkMode }) => {
  return (
    <Fragment>
      <div
        className={isDarkMode ? styles.feedback__card : `${styles.feedback__card} ${styles.dark}`}
      >
        <p className={styles.feedback__item}>Отзыв клиента №{id}</p>
        <div className={styles.feedback__form}>
          <div className={styles.feedback__row}>
            <span>Имя: </span>
            <p>{name}</p>
          </div>
          <div className={styles.feedback__row}>
            <span>Дата посещения: </span>
            <p>{formatDate}</p>
          </div>
          <div className={styles.feedback__row}>
            <span>Отзыв: </span>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FeedbackCard;
