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
              <span className="mins">{this.state.minutes}: </span>
              <span className="secs"> {this.state.seconds} </span>
              <span className="millis"> .{this.state.millis} </span>
            </div>
          </div>

        <div className="actions">
            <button className="btn start" onClick={()=> console.log("Start")}> Start </button>
            <button className="btn stop" onClick={()=> console.log("Stop")}> Stop </button>
            <button className="btn rst" onClick={()=> console.log("Reset")}> Reset </button>
        </div>
       </div>
    );
  }
}

export default App;
