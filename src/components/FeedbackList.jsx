import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import FeedbackItem from './FeedbackItem';

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);
  console.log(feedback);

  if (!feedback || feedback.length === 0) return <p>No feedback yet.</p>;

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;
