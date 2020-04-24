import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const value = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

function App() {
  return (
    <div className="App">
      {task('Ler um livro')}
      <ul>{ value.map(value => <li>{ value }</li>) }</ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul><li>{ 'lista' }</li></ul>
    </div>
  );
}

export default App;
