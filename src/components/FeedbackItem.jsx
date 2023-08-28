import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className='rating-number'>{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        type='button'
        className='close'
      >
        <FaTimes color='purple' />
        <span className='sr-only'>Delete</span>
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <p>{item.text}</p>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
