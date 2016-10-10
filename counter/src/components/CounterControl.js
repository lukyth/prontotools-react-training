import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../actions/counterAction'

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

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: bindActionCreators(increaseCounter, dispatch),
  decreaseCounter: bindActionCreators(decreaseCounter, dispatch),
  resetCounter: bindActionCreators(resetCounter, dispatch)
})

export default connect(null, mapDispatchToProps)(CounterControl)
