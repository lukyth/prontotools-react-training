import React from 'react'

class CounterControl extends React.Component {

  onClickIncrease = () => {
    this.props.increaseCounter()
  }

  onClickDecrease = () => {
    this.props.decreaseCounter()
  }

  onClickReset = () => {
    this.props.resetCounter()
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
