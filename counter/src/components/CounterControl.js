import React from 'react'

import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../actions/counterAction'

class CounterControl extends React.Component {

  onClickIncrease = () => {
    this.context.store.dispatch(increaseCounter())
  }

  onClickDecrease = () => {
    this.context.store.dispatch(decreaseCounter())
  }

  onClickReset = () => {
    this.context.store.dispatch(resetCounter())
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

CounterControl.contextTypes = {
  store: React.PropTypes.object
}

export default CounterControl
