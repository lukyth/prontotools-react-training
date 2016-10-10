import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
} from '../counterAction'

describe('Counter Actions', () => {
  it('should create INCREASE_COUNTER action', () => {
    const actual = increaseCounter()
    const expected = { type: INCREASE_COUNTER }
    expect(actual).toEqual(expected)
  })

  it('should create DECREASE_COUNTER action', () => {
    const actual = decreaseCounter()
    const expected = { type: DECREASE_COUNTER }
    expect(actual).toEqual(expected)
  })

  it('should create RESET_COUNTER action', () => {
    const actual = resetCounter()
    const expected = { type: RESET_COUNTER }
    expect(actual).toEqual(expected)
  })
})
