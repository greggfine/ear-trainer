import React, { Component } from 'react';
import './App.css';
import Play_Rand_Int from './components/Play_Rand_Int';
import Note_Choices from './components/Note_Choices';

class App extends Component {
  render() {
    return (
      <div>
        <Play_Rand_Int />
        <Note_Choices />
      </div>
    );
  }
}

export default App;
