import React from 'react'

const TodoListItem = ({ item, onClick }) =>
  <li>
    <span>{item.text}</span>
    <input type='checkbox' checked={item.isDone} onClick={onClick} />
  </li>

TodoListItem.propTypes = {
  item: React.PropTypes.object,
  onClick: React.PropTypes.func
}

export default TodoListItem
