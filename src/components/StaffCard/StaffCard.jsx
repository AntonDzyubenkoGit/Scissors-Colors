import React from 'react';
import styles from './StaffCard.module.css';

const StaffCard = ({ name, profession, experience, image, isDarkMode }) => {
  function renderSwitch(param) {
    switch (param) {
      case 1:
        return 'год';
      case 2:
        return 'года';
      case 3:
        return 'года';
      case 4:
        return 'года';
      default:
        return 'лет';
    }
  }

  return (
    <div className={isDarkMode ? styles.staff__card : `${styles.staff__card} ${styles.dark}`}>
      <div style={{ overflow: 'hidden' }}>
        <img src={image} alt={`${name} photo`} className={styles.staff__img} />
      </div>
      <p className={styles.staff__name}>{name}</p>
      <p className={styles.staff__profession}>{profession}</p>
      <p className={styles.staff__experience}>
        <span>опыт работы:</span>
        {` ${experience} `}
        <span>{renderSwitch(experience)}</span>
      </p>
    </div>
  );
};

export default StaffCard;
