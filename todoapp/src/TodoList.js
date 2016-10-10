import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ list, onClick }) =>
  <ul>
    {list.map(item => <TodoListItem onClick={onClick(item.id)} key={item.id} item={item}/>)}
  </ul>

TodoList.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.object),
  onClick: React.PropTypes.func
}

export default TodoList
