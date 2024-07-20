import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          hello Tailwind!
        </h1>
      </header>
    </div>
  );
}

export default App;
