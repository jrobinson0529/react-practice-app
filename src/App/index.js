import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import getRandomJoke from '../data/jokeData';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [buttonState, setButtonState] = useState(false);

  const toggleButtonState = () => {
    setButtonState(!buttonState);
  };
  const getJoke = () => {
    getRandomJoke().then((response) => setSingleJoke(response));
  };
  useEffect(() => {
    getJoke();
  }, []);
  console.warn(singleJoke);
  return (
    <div className='App'>
      <div className='joke-main-container'>
        <div className='image-container'></div>
        <div className='joke-setup-container'>
          <h3 id='jokeSetup'>{buttonState ? singleJoke.setup : ''}</h3>
        </div>
        <div className='joke-punchline-container'>
          <h3 id='jokePunch'>{buttonState ? '' : singleJoke.punchline}</h3>
        </div>
        <div className='btn-container'>
          <button className='btn btn-primary'
            onClick={
              toggleButtonState
              }>
            {buttonState ? 'Get PUNCH' : 'GET JOKE'}
            </button>
    </div>
      </div>
    </div>
  );
}

export default App;
