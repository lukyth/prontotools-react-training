import React from 'react'
import CounterControl from './CounterControl.js'

class Counter extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { store } = this.props
    const counter = store.getState()
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <CounterControl store={store} />
      </div>
    )
  }
}

export default Counter
