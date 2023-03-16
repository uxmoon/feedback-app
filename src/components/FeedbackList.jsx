import FeedbackItem from './FeedbackItem'
function FeedbackList({feedback}) {
  if(!feedback || feedback.length === 0) 
    return <p>No feedback yet.</p>
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item} />
      ))}
    </div>
  )
}

export default FeedbackList