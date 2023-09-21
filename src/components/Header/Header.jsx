import React from 'react';
import styles from './Header.module.css';
import { logo_light, logo_dark, moon, sun } from '../../assets';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <a className={styles.header__logo} href="./">
        <img src={logo_light} alt="logo" />
      </a>
      <nav className={styles.header__menu}>
        <ul className={styles.header__links}>
          <li className={styles.header__link}>
            <a href="#">Главная</a>
          </li>
          <li className={styles.header__link}>
            <a href="#">Наши услуги</a>
          </li>
          <li className={styles.header__link}>
            <a href="#">Мастера</a>
          </li>
          <li className={styles.header__link}>
            <a href="#">отзывы</a>
          </li>
          <li>
            <button className={styles.header__btn} type="button">
              <img src={moon} alt="moon icon" />
            </button>
          </li>
        </ul>
      </nav>
      <div className={styles.header__banner}>
        <ul className={styles.header__promo}>
          <li className={styles.promotext}>Стрижка всегда та, чем кажется </li>
          <li className={styles.promotext}>За красивыми волосами стоит правильный уход </li>
          <li className={styles.promotext}>Лучшие услуги в городе </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
