import React from 'react';
import benefitsData from '../../data/benefits';
import styles from './Benefits.module.css';
import BenefitCard from '../BenefitCard/BenefitCard';

const Benefits = ({ isDarkMode }) => {
  return (
    <div className={`${styles.benefit} container`}>
      <h2>Сервис и преимущества</h2>
      <div className={styles.benefit__cards}>
        {benefitsData.map((benefit) => {
          return (
            <BenefitCard
              key={benefit.id}
              isDarkMode={isDarkMode}
              name={benefit.name}
              description={benefit.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
