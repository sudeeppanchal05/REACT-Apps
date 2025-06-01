// JavaScript source code
import React, { useState } from 'react';
import './App.css';

function Home() {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(input);
  };

  return (
    <div className="Home">
      <h2>Welcome Home!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>You submitted: <b>{submitted}</b></p>}
    </div>
  );
}

export default Home;