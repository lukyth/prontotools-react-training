import {
  createTodo,
  toggleDone,
  CREATE_TODO,
  TOGGLE_DONE
} from '../actions/todoActions'

export default function todoReducer(state = [], action) {
  switch(action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          text: action.text,
          isCompleted: false
        }
      ]

    case TOGGLE_DONE:
      return state.map((todo, index) => {
        if (action.id !== index) return todo
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      })

    default:
      return state
  }
}
