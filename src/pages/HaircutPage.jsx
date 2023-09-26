import React from 'react';
import { useParams } from 'react-router-dom';
import { haircutWomenData, haircutManData } from '../data/detailService';

const HaircutPage = () => {
  const { link } = useParams();

  const haircutsData = [...haircutWomenData, ...haircutManData];
  const haircut = haircutsData.filter((hair) => hair.link === link);

  return (
    <main>
      <div>
        {haircut.map((item) => {
          return (
            <div key={item.link} className="container">
              {item.serviceName}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HaircutPage;
