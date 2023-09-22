import React from 'react';
import { mainPicture } from '../../assets';
import styles from './MainPicture.module.css';

const MainPicture = () => {
  return (
    <div className={styles.picture}>
      <img src={mainPicture} alt="main picture" className={styles.picture__img} />
    </div>
  );
};

export default MainPicture;
