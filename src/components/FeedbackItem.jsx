import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} type='button'>
        &times;
        <span className='sr-only'>Delete</span>
      </button>
      <p>{item.text}</p>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
