import { createContext, useState, useEffect } from 'react'

// Create context, Pascal Case
const FeedbackContext = createContext()

// Provider
export const FeedbackProvider = ({ children }) => {
  // state
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // side effects
  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    )
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

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
        isLoading,
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
