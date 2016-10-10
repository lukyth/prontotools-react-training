import React from 'react'

import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../actions/counterAction'

class CounterControl extends React.Component {

  onClickIncrease = () => {
    this.props.store.dispatch(increaseCounter())
  }

  onClickDecrease = () => {
    this.props.store.dispatch(decreaseCounter())
  }

  onClickReset = () => {
    this.props.store.dispatch(resetCounter())
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickDecrease}>-</button>
        <button onClick={this.onClickIncrease}>+</button>
        <button onClick={this.onClickReset}>reset</button>
      </div>
    )
  }
}

export default CounterControl
