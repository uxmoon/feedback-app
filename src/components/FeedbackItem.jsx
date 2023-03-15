import { useState } from "react"
function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState("This is an example of a feedback item.")
  return (
    <div className="card">
      <div>{rating}</div>
      <p>{text}</p>
    </div>
  )
}

export default FeedbackItem