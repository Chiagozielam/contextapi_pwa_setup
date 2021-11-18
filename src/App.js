import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useGeneralContext } from './context'

function App() {
  const  { state: { testExxampleString }, runExampleFunction} = useGeneralContext();

  useEffect(() => {
    runExampleFunction();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{testExxampleString}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
