import React from 'react';
import logo from './logo.svg';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import Text from './text'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <P5Wrapper sketch={sketch} />
          <Text />
        </>
      </header>
    </div>
  );
}

export default App;
