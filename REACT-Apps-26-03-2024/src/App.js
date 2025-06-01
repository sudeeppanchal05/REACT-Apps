import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';

function Main() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#4CAF50');

  const func = () => {
    alert("clicked on the button");
  };
  const parafunc = (para, name) => {
    alert(para + "  button clicked on the button" + name);
  };

  return (
    <div className="App">
      <h1>REACT FIRST APP</h1>
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Main</Link>
        <Link to="/home" className="nav-link">Home</Link>
        <a className="nav-link" href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer">Google</a>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="interactive-section">
          <button onClick={func} className="my-button">Normal Click</button>
          <button className="my-button" onClick={() => parafunc('parameter','sudeep')}>Parameterized Button Click</button>
          <div className="counter-section">
            <p>Counter: <b>{count}</b></p>
            <button className="my-button" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="my-button" onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
          <div className="color-section">
            <button
              className="my-button"
              style={{ backgroundColor: color }}
              onClick={() => setColor(color === '#4CAF50' ? '#e91e63' : '#4CAF50')}
            >
              Color Change Button
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
