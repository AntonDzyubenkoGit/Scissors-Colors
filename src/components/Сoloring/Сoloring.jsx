import React from 'react';
import СoloringCard from './../СoloringCard/СoloringCard';
import styles from './Сoloring.module.css';

const Сoloring = ({ isDarkMode, servicesData, title }) => {
  return (
    <div className={`${styles.coloring} container`}>
      <h2>{title}</h2>
      <div className={styles.coloring__cards}>
        {servicesData.map((service) => {
          return (
            <СoloringCard
              key={service.id}
              image={service.image}
              item={service.item}
              description={service.description}
              price={service.price}
              time={service.time}
              isDarkMode={isDarkMode}
            ></СoloringCard>
          );
        })}
      </div>
    </div>
  );
};

export default Сoloring;
