import { createContext, useState } from 'react';

// Create context, Pascal Case
const FeedbackContext = createContext();

// Provider
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);
  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
