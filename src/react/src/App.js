import React, { Component } from 'react';
import Nav from './Nav';
import Lists from './Lists';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <Lists />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
