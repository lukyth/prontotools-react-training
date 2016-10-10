import React from 'react'

const TodoInput =  ({ text, onChange, onSubmit }) =>
  <form onSubmit={onSubmit}>
    <input type='text' onChange={onChange} value={text} />
  </form>

TodoInput.propTypes = {
  text: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}

export default TodoInput
