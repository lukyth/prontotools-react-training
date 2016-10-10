import {
  createTodo,
  toggleDone,
  CREATE_TODO,
  TOGGLE_DONE
} from '../../actions/todoActions'
import todoReducer from '../todoReducer'
import deepFreeze from 'deep-freeze'

describe('Todo Reducer', () => {
  it('should have initial state == []', () => {
    expect(
      todoReducer(undefined, { type: '@@INIT' })
    ).toEqual([])
  })

  it('should add todo on CREATE_TODO', () => {
    const state = deepFreeze([])
    let action = createTodo('First todo')
    const firstTodo = {
      text: 'First todo',
      isCompleted: false
    }
    let expected = [firstTodo]
    const nextState = deepFreeze(todoReducer(state, action))
    expect(nextState).toEqual(expected)

    // Test add todo again
    action = createTodo('Second todo')
    const secondTodo = {
      text: 'Second todo',
      isCompleted: false
    }
    expected = [firstTodo, secondTodo]
    const actual = todoReducer(nextState, action)
    expect(actual).toEqual(expected)
  })

  it('should toggle done on TOGGLE_DONE', () => {
    const state = deepFreeze([
      {
        text: 'First todo',
        isCompleted: false
      }, {
        text: 'Second todo',
        isCompleted: false
      }
    ])
    let action = toggleDone(1)
    let expected = [
      {
        text: 'First todo',
        isCompleted: false
      }, {
        text: 'Second todo',
        isCompleted: true
      }
    ]
    const nextState = deepFreeze(todoReducer(state, action))
    expect(nextState).toEqual(expected)

    // Test toggle again
    action = toggleDone(0)
    expected = [
      {
        text: 'First todo',
        isCompleted: true
      }, {
        text: 'Second todo',
        isCompleted: true
      }
    ]
    const actual = todoReducer(nextState, action)
    expect(actual).toEqual(expected)
  })
})
