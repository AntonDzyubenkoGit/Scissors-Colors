import React from 'react';
import { useParams } from 'react-router-dom';
import { haircutWomenData, haircutManData } from '../data/detailService';
import Haircut from '../components/Haircut/Haircut';

const HaircutPage = ({ isDarkMode }) => {
  const { link } = useParams();

  const haircutsData = [...haircutWomenData, ...haircutManData];
  const haircutData = haircutsData.filter((hair) => hair.link === link);
  const haircut = haircutData[0];

  return (
    <main>
      <Haircut haircut={haircut} isDarkMode={isDarkMode} />
    </main>
  );
};

export default HaircutPage;
