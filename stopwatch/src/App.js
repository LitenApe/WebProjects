import React, { Component } from 'react';
import 'normalize.css/normalize.css'

import Timer from './components/Timer';
import History from './components/History';

import './App.css';

class App extends Component {
  state = {
    history: []
  }

  lapHandler = (totalTime, lapTime) => {
    const { history } = this.state;

    history.push({
      total: totalTime,
      lap: lapTime,
    });
    console.log(history)
    this.setState({
      history,
    });
  }
  
  clearHandler = () => {
    this.setState({
      history: []
    })
  }

  render() {
    const { history } = this.state;

    return (
      <div className="App">
        <Timer lapHandler={this.lapHandler} clearHandler={this.clearHandler}/>
        <History laps={history}/>
      </div>
    );
  }
}

export default App;
