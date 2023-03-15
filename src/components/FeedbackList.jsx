function FeedbackList({feedback}) {
  if(!feedback || feedback.length === 0) 
    return <p>No feedback yet</p>
  return (
    <div>List</div>
  )
}

export default FeedbackList