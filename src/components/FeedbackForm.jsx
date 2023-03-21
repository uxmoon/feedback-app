import { useState } from 'react'
import Card from './shared/Card'
function FeedbackForm() {
  const [text, setText] = useState('')
  const handleTextChange = (event) => {
    setText(event.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
