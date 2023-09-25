import React from 'react';
import Staff from '../components/Staff/Staff';

const StaffPage = ({ isDarkMode }) => {
  return (
    <main>
      <Staff isDarkMode={isDarkMode} />
    </main>
  );
};

export default StaffPage;
