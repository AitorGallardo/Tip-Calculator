import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [validBill, setValidBill] = useState(true);
  const [validNumberOfPeople, setValidNumberOfPeople] = useState(true);

  const handleValidInput = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    if (name === 'bill') {
      setValidBill(true);
      if (value <= 0) {
        setValidBill(false);
      }
    }
    if (name === 'people') {
      setValidNumberOfPeople(true);
      if (value <= 0) {
        setValidNumberOfPeople(false);
      }
    }
  };

  return (
    <>
      <div className='container'>
        <img className='app__logo' src={logo} alt='' />
        <div className='app__container'>
          <div className='app__input-data'>
            <fieldset>
              <div className='input-header'>
                <label htmlFor='bill'>Bill</label>
                {!validBill && (
                  <span className='invalid-message'>Can&apos;t be zero</span>
                )}
              </div>
              <div className='input-icon'>
                <span className='icon dollar'></span>
                <input
                  className={!validBill ? 'invalid-input' : ''}
                  name='bill'
                  id='bill'
                  type='number'
                  placeholder='0'
                  onChange={handleValidInput}
                />
              </div>
            </fieldset>
            <div className='app__tip-select'>
              <label htmlFor='selector'>Select Tip %</label>
              <div id='selector' className='app__tip-grid'>
                <button role='option' className='app__tip-option'>
                  5%
                </button>
                <button role='option' className='app__tip-option'>
                  10%
                </button>
                <button role='option' className='app__tip-option'>
                  15%
                </button>
                <button
                  role='option'
                  aria-selected='true'
                  className='app__tip-option'
                >
                  25%
                </button>
                <button role='option' className='app__tip-option'>
                  50%
                </button>
                <input
                  className='app__tip-custom'
                  type='number'
                  placeholder='Custom'
                />
              </div>
            </div>
            <fieldset>
              <div className='input-header'>
                <label htmlFor='people'>Number of people</label>
                {!validNumberOfPeople && (
                  <span className='invalid-message'>Can&apos;t be zero</span>
                )}
              </div>
              <div className='input-icon'>
                <span className='icon person'></span>
                <input
                  className={!validNumberOfPeople ? 'invalid-input' : ''}
                  name='people'
                  id='people'
                  type='number'
                  placeholder='0'
                  onChange={handleValidInput}
                />
              </div>
            </fieldset>
          </div>
          <div className='app__result'>
            <div>
              <div className='app__result-value tip_amount'>
                <div className='app_result-value-text'>
                  <p className='app_result-value-text-top'>Tip Amount</p>
                  <p className='app_result-value-text-sub'>/person</p>
                </div>
                <p className='app_result-value-value'>$0.00</p>
              </div>
              <div className='app__result-value total'>
                <div className='app_result-value-text'>
                  <p className='app_result-value-text-top'>Total</p>
                  <p className='app_result-value-text-sub'>/person</p>
                </div>
                <p className='app_result-value-value'>$0.00</p>
              </div>
            </div>

            <button className='app__result-reset'>RESET</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
