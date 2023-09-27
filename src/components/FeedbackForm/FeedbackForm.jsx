import React, { useRef, useState } from 'react';
import styles from './FeedbackForm.module.css';

const FeedbackForm = ({ isDarkMode }) => {
  const [status, setStatus] = useState('');

  const [inputName, setInputName] = useState();
  const [inputDate, setInputDate] = useState();
  const [textMessage, setTextMessage] = useState();

  if (status === 'completed') {
    return (
      <p style={{ textAlign: 'center', marginTop: 50, fontSize: 28 }}>
        Спасибо! Ваше собщение никуда не отправлено!
      </p>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    const name = inputName.trim();
    const date = inputDate.trim();
    const message = textMessage.trim();

    if ((name.length > 0) & (date.length > 0) & (message.length > 0)) {
      await submitForm();
      setStatus('completed');
    } else {
      setStatus('');
    }
  }

  function handleNameChange(e) {
    setInputName(e.target.value);
  }

  function handleDateChange(e) {
    setInputDate(e.target.value);
  }

  function handleTextareaChange(e) {
    setTextMessage(e.target.value);
  }

  return (
    <div className={`${styles.feedback} container`}>
      <h2>Вы можете написать нам</h2>
      <form
        onSubmit={handleSubmit}
        name="feedbackForm"
        autoComplete="off"
        className={isDarkMode ? styles.feedback__form : `${styles.feedback__form} ${styles.dark}`}
      >
        <p className={styles.feedback__item}>Форма обратной связи</p>
        <div
          className={
            isDarkMode ? styles.feedback__field : `${styles.feedback__field} ${styles.dark}`
          }
        >
          <label htmlFor="name">Ваше имя:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Укажите ваше имя"
            required
            onChange={handleNameChange}
          />
        </div>
        <div
          className={
            isDarkMode ? styles.feedback__field : `${styles.feedback__field} ${styles.dark}`
          }
        >
          <label htmlFor="date">Дата посещения:</label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="Например: 20.09.2023"
            required
            onChange={handleDateChange}
          />
        </div>
        <div
          className={
            isDarkMode ? styles.feedback__message : `${styles.feedback__message} ${styles.dark}`
          }
        >
          <label htmlFor="message">Ваше сообщение:</label>
          <textarea name="message" id="message" required onChange={handleTextareaChange}></textarea>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            className={isDarkMode ? styles.feedback__btn : `${styles.feedback__btn} ${styles.dark}`}
            type="submit"
            disabled={status === 'submitting'}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;

function submitForm() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
}
