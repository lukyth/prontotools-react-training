import React, { Component } from 'react';
import Counter from './components/Counter'
import './App.css';

class App extends Component {

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <div className='App'>
        <Counter />
      </div>
    );
  }
}

App.childContextTypes = {
  store: React.PropTypes.object
}

export default App;
