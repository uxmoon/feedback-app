import { createContext, useState } from 'react'

// Create context, Pascal Case
const FeedbackContext = createContext()

// Provider
export const FeedbackProvider = ({ children }) => {
  // data
  const [feedback, setFeedback] = useState([
    {
      id: crypto.randomUUID(),
      rating: 10,
      text: 'This is feedback item 1',
    },
    {
      id: crypto.randomUUID(),
      rating: 8,
      text: 'This is feedback item 2',
    },
    {
      id: crypto.randomUUID(),
      rating: 5,
      text: 'This is feedback item 3',
    },
  ])

  // functions

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = crypto.randomUUID()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
