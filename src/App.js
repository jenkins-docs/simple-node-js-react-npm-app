import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	  <h1> Simple Node JS React NPM App</h1>
	    <p>Packages used: react, NodeJS, server</p>
	    <button onClick={() => window.location.href='http://localhost:3000/job/{YOUR_JENKINS_JOB_NAME}/build'}>Build Project</button>
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
