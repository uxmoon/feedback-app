import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='rating-number'>{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        type='button'
        className='close'
      >
        &times;
        <span className='sr-only'>Delete</span>
      </button>
      <p>{item.text}</p>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
