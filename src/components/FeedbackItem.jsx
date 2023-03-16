function FeedbackItem({item}) {
  return (
    <div className="card">
      <div>{item.rating}</div>
      <p>{item.text}</p>
    </div>
  )
}

export default FeedbackItem