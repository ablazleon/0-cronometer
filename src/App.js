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
        running: false
    }
    this._handleStartClick = this._handleStartClick.bind(this)
    this._handleStopClick = this._handleStopClick.bind(this)
    this._handleResetClick = this._handleResetClick.bind(this)
  }

  _handleStartClick(){
      // If the state is not running

      if(!this.state.running) {
          this.interval = setInterval(() => {
              this.tick()
          }, 100);
      }
      this.setState({running: true})
  }

  // Each milli
  tick(){
      let millis = this.state.millis + 1;
      let seconds = this.state.seconds;
      let minutes = this.state.minutes;
      if(millis === 10){
          millis = 0
          seconds = seconds + 1
      }
      if(seconds === 60){
          millis = 0
          seconds = 0
          minutes = minutes + 1
      }
      this.setState({
          millis: millis,
          seconds: seconds,
          minutes: minutes
      })
  }

  // Only if running, stop teh interval
    _handleStopClick(){
      if(this.state.running){
          clearInterval(this.interval)
          this.setState({running: false})
      }
    }

    _handleResetClick(){

            //Stop
            this._handleStopClick()
            this.setState({
                millis: 0,
                seconds: 0,
                minutes: 0
            })
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
            <button className="btn start" onClick={this._handleStartClick}> Start </button>
            <button className="btn stop" onClick={this._handleStopClick}> Stop </button>
            <button className="btn rst" onClick={this._handleResetClick}> Reset </button>
        </div>
       </div>
    );
  }
}

export default App;
