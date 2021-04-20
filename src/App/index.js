import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import getRandomJoke from '../data/jokeData';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [buttonState, setButtonState] = useState(0);
  const [buttonText, setButtonText] = useState('Get Joke');

  const toggleButtonState = (num) => {
    setButtonState(num);
  };
  const getJoke = () => {
    getRandomJoke().then((response) => setSingleJoke(response));
  };
  useEffect(() => {
    getJoke();
  }, []);
  return (
    <div className='App'>
      <div className='joke-main-container'>
        <div className='image-container'></div>
        <div className='joke-setup-container'>
          <h3 id='jokeSetup'>{buttonState === 1 || buttonState === 2 ? singleJoke.setup : ''}</h3>
        </div>
        <div className='joke-punchline-container'>
          <h3 id='jokePunch'>{buttonState === 0 || buttonState === 1 ? '' : singleJoke.punchline}</h3>
        </div>
        <div className='btn-container'>
          <button className='btn btn-primary'
            onClick={() => {
              switch (buttonState) {
                case 0:
                  toggleButtonState(1);
                  setButtonText('Get Punchline');
                  break;
                case 1:
                  setButtonText('Get New Joke');
                  toggleButtonState(2);
                  break;
                case 2:
                  setButtonText('Get Punchline');
                  getJoke();
                  toggleButtonState(1);
                  break;
                default:
                  break;
              }
            }
            }>{buttonText}</button>
    </div>
      </div>
    </div>
  );
}

export default App;
