import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    const showHello = true;
    const showMath = true;

    let math;

    if (showMath) {
      math = <h2>1 + 1 = {1 + 1}</h2>;
    } else {
      math = null;
    }

    // if (showHello) {
    //   return <h1>Hello {name.toUpperCase()}</h1>;
    // } else {
    //   return null;
    // }

    return (
      <div className="App">
        {showHello ? <h1>Hello {name.toUpperCase()}</h1> : null}
        {math}
      </div>
    );
  }
}

export default App;
