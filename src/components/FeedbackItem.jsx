import Card from "./shared/Card"
function FeedbackItem({item}) {
  return (
    <Card reverse>
      <div>{item.rating}</div>
      <p>{item.text}</p>
    </Card>
  )
}

export default FeedbackItem