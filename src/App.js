import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        millis: 0,
        seconds: 0,
        minutes: 0,
        running: true
    }
  }
  render() {
    return (
      <div className="App">
          <div className="display">
            <div className="state">'Status: running' </div>
            <div className="numbers">
              <span className="mins"> 0: </span>
              <span className="secs"> 05 </span>
              <span className="millis"> .04 </span>
            </div>
          </div>

        <div className="actions">
            <button className="btn start" > Start </button>
            <button className="btn stop" > Stop </button>
            <button className="btn rst" > Reset </button>
        </div>
       </div>
    );
  }
}

export default App;
