import React, { useState } from 'react';
import styles from './Header.module.css';
import { logo_light, logo_dark, moon, sun } from '../../assets';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`${styles.header} container`}>
      <Link className={styles.header__logo} to="/">
        <img src={isDarkMode ? logo_light : logo_dark} alt="logo" />
      </Link>
      <nav className={styles.header__menu}>
        <ul
          className={isDarkMode ? styles.header__links : `${styles.header__links} ${styles.dark}`}
        >
          <li className={styles.header__link}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.link__active : '')}>
              Главная
            </NavLink>
          </li>
          <li className={styles.header__link}>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? styles.link__active : '')}
            >
              Наши услуги
            </NavLink>
          </li>
          <li className={styles.header__link}>
            <NavLink
              to="/staff"
              className={({ isActive }) => (isActive ? styles.link__active : '')}
            >
              Мастера
            </NavLink>
          </li>
          <li className={styles.header__link}>
            <NavLink
              to="/feedback"
              className={({ isActive }) => (isActive ? styles.link__active : '')}
            >
              отзывы
            </NavLink>
          </li>
          <li className={styles.header__switch}>
            <button
              className={isDarkMode ? styles.header__btn : `${styles.header__btn} ${styles.dark}`}
              type="button"
              onClick={toggleDarkMode}
            >
              <img src={isDarkMode ? moon : sun} alt={isDarkMode ? 'moon icon' : 'sun icon'} />
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={isDarkMode ? styles.header__banner : `${styles.header__banner} ${styles.dark}`}
      >
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
