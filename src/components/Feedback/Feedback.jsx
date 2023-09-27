import React, { useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import styles from './Feedback.module.css';
import feedbackData from '../../data/feedback';

const Feedback = ({ isDarkMode }) => {
  const [feedbackSort, setFeedbackSort] = useState(feedbackData);

  function sortData() {
    setFeedbackSort(
      [...feedbackSort].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    );
  }

  return (
    <div className={`${styles.feedback} container`}>
      <h1>Ваши отзывы</h1>
      <h2 className={styles.feedback__target}>любим наших клиентов и делаем всё для взаимности</h2>

      <div className={styles.feedback__sort}>
        <button
          type="button"
          onClick={sortData}
          className={isDarkMode ? styles.feedback__btn : `${styles.feedback__btn} ${styles.dark}`}
        >
          Сортировать по дате
        </button>
      </div>

      <div className={styles.feedback__cards}>
        {feedbackSort.map((feedback) => {
          return (
            <FeedbackCard
              key={feedback.id}
              id={feedback.id}
              name={feedback.name}
              formatDate={feedback.formatDate}
              comment={feedback.comment}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
