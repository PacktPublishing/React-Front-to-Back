import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Lifecycle method (required)
  render() {
    console.log('render ran...');
    // Non-JSX (Compiled code)
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'The App Component')
    // );
    return (
      <div className="App">
        <h1>The App Component</h1>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
      </div>
    );
  }
}

export default App;
