import React from 'react';
import styles from './Contacts.module.css';
import { telegram_light, telegram_dark, whatsapp_light, whatsapp_dark } from '../../assets';

const Contacts = ({ isDarkMode }) => {
  return (
    <div className={`${styles.contact} container`}>
      <h2>Адрес и контакты</h2>
      <div className={isDarkMode ? styles.contact__card : `${styles.contact__card} ${styles.dark}`}>
        <p>Вы можете связаться с нами по номеру:</p>
        <p
          className={
            isDarkMode ? styles.contact__address : `${styles.contact__address} ${styles.dark}`
          }
        >
          +7-ХХХ-ХХХ-ХХ-ХХ
        </p>
        <p>или использовать Telegram или WhatsUp </p>
        <div className={styles.contact__social}>
          <a href="https://t.me/Dzyubenkoav" target="_blank" rel="noreferrer">
            <img
              className={styles.contact__icon}
              src={isDarkMode ? telegram_light : telegram_dark}
              alt="telegram icon"
            />
          </a>
          <a href="https://t.me/Dzyubenkoav" target="_blank" rel="noreferrer">
            <img
              className={styles.contact__icon}
              src={isDarkMode ? whatsapp_light : whatsapp_dark}
              alt="whatsapp icon"
            />
          </a>
        </div>
        <p>Приезжайте к нам по адресу</p>
        <p
          className={
            isDarkMode ? styles.contact__address : `${styles.contact__address} ${styles.dark}`
          }
        >
          город Неизвестный, улица Неназванная, дом 16
        </p>
      </div>
    </div>
  );
};

export default Contacts;
