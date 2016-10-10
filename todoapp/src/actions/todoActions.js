export const CREATE_TODO = 'CREATE_TODO'
export const TOGGLE_DONE = 'TOGGLE_DONE'

export const createTodo = text => ({
  type: CREATE_TODO,
  text,
  isCompleted: false
})

export const toggleDone = id => ({
  type: TOGGLE_DONE,
  id
})
