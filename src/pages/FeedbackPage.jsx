import React from 'react';
import Feedback from '../components/Feedback/Feedback';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';

const FeedbackPage = ({ isDarkMode }) => {
  return (
    <main>
      <Feedback isDarkMode={isDarkMode} />
      <FeedbackForm isDarkMode={isDarkMode} />
    </main>
  );
};

export default FeedbackPage;
