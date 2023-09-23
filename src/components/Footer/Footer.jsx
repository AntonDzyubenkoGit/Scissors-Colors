import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={isDarkMode ? `${styles.footer}` : `${styles.footer} ${styles.dark}`}>
      <div className={styles.footer__info}>
        <p className={styles.footer__item}>Сайт носит ознакомительный характер</p>
        <p className={styles.footer__item}>
          Большая часть изображений сгенерированы с помощью нейросети kandinsky 2.2.
        </p>
        <p className={styles.footer__item}>Компания Scissors&Colors не существует</p>
        <p className={styles.footer__item}>
          Все услуги и цены вымышлены и не являются публичной офертой
        </p>
      </div>
      <div
        className={isDarkMode ? `${styles.footer__copy}` : `${styles.footer__copy} ${styles.dark}`}
      >
        <a href="https://dav-studio.ru/" target="_blank" rel="noreferrer">
          dav-studio | 2022 - {new Date().getFullYear()}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
