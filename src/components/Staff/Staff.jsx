import React from 'react';
import styles from './Staff.module.css';
import StaffCard from '../StaffCard/StaffCard';
import staffData from '../../data/staff';

const Staff = ({ isDarkMode }) => {
  return (
    <div className={`${styles.staff} container`}>
      <h1>Наши мастера</h1>
      <h2 className={styles.staff__target}>позаботятся о вашей красоте</h2>
      <div className={styles.staff__cards}>
        {staffData.map((person) => {
          return (
            <StaffCard
              key={person.id}
              name={person.name}
              profession={person.profession}
              experience={person.experience}
              image={person.image}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
