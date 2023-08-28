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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

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

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
