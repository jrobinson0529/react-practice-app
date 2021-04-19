import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <div className='joke-main-container'>
        <div className='image-container'></div>
        <div className='joke-setup-container'>
          <h3 id='jokeSetup'>JOKE SETUP</h3>
        </div>
        <div className='joke-punchline-container'>
          <h3 id='jokePunch'>JOKE PUNCHLINE</h3>
        </div>
        <div className='btn-container'>
          <button className='btn btn-primary'>GET A JOKE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
