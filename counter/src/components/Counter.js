import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CounterControl from './CounterControl.js'
import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../actions/counterAction'

class Counter extends React.Component {
  render() {
    const counter = this.props.counter
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <CounterControl
          increaseCounter={this.props.increaseCounter}
          decreaseCounter={this.props.decreaseCounter}
          resetCounter={this.props.resetCounter} />
      </div>
    )
  }
}

const mapStoreStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: bindActionCreators(increaseCounter, dispatch),
  decreaseCounter: bindActionCreators(decreaseCounter, dispatch),
  resetCounter: bindActionCreators(resetCounter, dispatch)
})

export default connect(mapStoreStateToProps, mapDispatchToProps)(Counter)
