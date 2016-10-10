import counterReducer from '../counterReducer'
import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../../actions/counterAction'

describe('Counter Reducer', () => {
  it('should initial state == 0', () => {
    const actual = counterReducer(undefined, { type: '@@INIT' })
    const expected = 0
    expect(actual).toEqual(expected)
  })

  it('should increase number on INCREASE_COUNTER', () => {
    const action = increaseCounter()
    let actual = counterReducer(0, action)
    let expected = 1
    expect(actual).toEqual(expected)

    // Test increase again
    actual = counterReducer(1, action)
    expected = 2
    expect(actual).toEqual(expected)
  })

  it('should decrease number on DECREASE_COUNTER', () => {
    const action = decreaseCounter()
    let actual = counterReducer(0, action)
    let expected = -1
    expect(actual).toEqual(expected)

    // Test decrease again
    actual = counterReducer(-1, action)
    expected = -2
    expect(actual).toEqual(expected)
  })

  it('should reset number on RESET_COUNTER', () => {
    const action = resetCounter()
    let actual = counterReducer(1, action)
    let expected = 0
    expect(actual).toEqual(expected)

    // Test reset again
    actual = counterReducer(-1, action)
    expected = 0
    expect(actual).toEqual(expected)
  })

  it('should return current state on OTHER_ACTION', () => {
    const action = { type: 'OTHER_ACTION' }
    let actual = counterReducer(0, action)
    let expected = 0
    expect(actual).toEqual(expected)

    // Test other action again
    actual = counterReducer(1, action)
    expected = 1
    expect(actual).toEqual(expected)
  })
})
