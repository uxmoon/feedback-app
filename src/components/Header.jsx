import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Default title',
  bgColor: '#252525',
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
