function App() {
  const title = 'Blog post'
  const body = 'This is my blog post'
  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
  ]
  const loading = false
  const showComments = true
  if (loading) return <p>Loading...</p>
  const commentsBlock = (
    <div className='comments'>
      <p>Comments ({comments.length})</p>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>
      {showComments && commentsBlock}
    </div>
  )
}

export default App
