import React from 'react'
import { connect } from 'react-redux'
import CounterControl from './CounterControl.js'

class Counter extends React.Component {
  render() {
    const counter = this.props.counter
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <CounterControl />
      </div>
    )
  }
}

const mapStoreStateToProps = (state) => ({
  counter: state
})

export default connect(mapStoreStateToProps)(Counter)
