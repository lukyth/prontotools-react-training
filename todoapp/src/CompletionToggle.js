import React from 'react'

const CompletionToggle = ({ onClick }) =>
  <label>
    <input type='checkbox' onClick={onClick} /> Show Completed
  </label>

CompletionToggle.propTypes = {
  onClick: React.PropTypes.func
}

export default CompletionToggle
