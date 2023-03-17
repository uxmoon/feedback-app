import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({item}) {
  return (
    <Card>
      <div>{item.rating}</div>
      <p>{item.text}</p>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem