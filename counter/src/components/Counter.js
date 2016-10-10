import React from 'react'
import CounterControl from './CounterControl.js'

class Counter extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const counter = this.context.store.getState()
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <CounterControl />
      </div>
    )
  }
}

Counter.contextTypes = {
  store: React.PropTypes.object
}

export default Counter
