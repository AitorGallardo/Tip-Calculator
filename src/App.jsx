import logo from './assets/logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { formatMaxNumberLengthNoDots,formatMaxNumberLength } from './helpers/formatMaxNumberLength';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [validBill, setValidBill] = useState(true);
  const [validNumberOfPeople, setValidNumberOfPeople] = useState(true);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    const tipVal = tip ? tip : customTip;
    if (bill && tipVal && numberOfPeople) {
      const { tipPerson, totalPerson } = calcTip({ bill, tip:tipVal, numberOfPeople });
      setTipPerPerson(tipPerson);
      setTotalPerPerson(totalPerson);
    }
  }, [bill, tip,customTip, numberOfPeople,]);

  const handleInput = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    if (name === 'bill') {
      const formatedValue = formatMaxNumberLength(value,10)
      setValidBill(true);
      setBill(formatedValue);
      if (formatedValue <= 0) {
        setValidBill(false);
      }
    }
    if (name === 'people') {
      const formatedValue = formatMaxNumberLengthNoDots(value,2)
      setValidNumberOfPeople(true);
      setNumberOfPeople(formatedValue);
      if (formatedValue <= 0) {
        setValidNumberOfPeople(false);
      }
    }
  };

  const handleSelectTip = (e) => {
    const tipValue = e.target.id;
    setTip(tipValue);
    setCustomTip('');
  };

  const handleCustomTip = (e) => {
    const value = e.target.value;
    const formatedTipValue = formatMaxNumberLengthNoDots(value,3)
    setCustomTip(formatedTipValue);
    setTip('');
   
  };

  const calcTip = ({ bill, tip, numberOfPeople }) => {
    bill = Number(bill);
    numberOfPeople = Number(numberOfPeople);
    numberOfPeople = Number(numberOfPeople);
    
    const totalTip = bill * (tip / 100);

    const n1 = totalTip / numberOfPeople;
    const n2 = (bill + totalTip) / numberOfPeople;
    const tipPerson = Math.floor(n1 * 100) / 100;
    const totalPerson = Math.floor(n2 * 100) / 100;

    return { tipPerson, totalPerson };
  };

  const reset = () =>{
    setBill('')
    setTip('')
    setCustomTip('')
    setNumberOfPeople('')
    setValidBill(true)
    setValidNumberOfPeople(true)
    setTipPerPerson(0)
    setTotalPerPerson(0)
  }

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
                  className={!validBill ? 'invalid-input' : 'valid-input'}
                  name='bill'
                  id='bill'
                  type='text'
                  placeholder='0'
                  max="99999"
                  value={bill}
                  onChange={handleInput}
                />
              </div>
            </fieldset>
            <div className='app__tip-select'>
              <label htmlFor='selector'>Select Tip %</label>
              <div id='selector' className='app__tip-grid'>
                <button
                  id='5'
                  role='option'
                  className={`app__tip-option ${tip == 5 ? 'selected' : ''}`}
                  onClick={handleSelectTip}
                >
                  5%
                </button>
                <button
                  id='10'
                  role='option'
                  className={`app__tip-option ${tip == 10 ? 'selected' : ''}`}
                  onClick={handleSelectTip}
                >
                  10%
                </button>
                <button
                  id='15'
                  role='option'
                  className={`app__tip-option ${tip == 15 ? 'selected' : ''}`}
                  onClick={handleSelectTip}
                >
                  15%
                </button>
                <button
                  id='25'
                  role='option'
                  className={`app__tip-option ${tip == 25 ? 'selected' : ''}`}
                  onClick={handleSelectTip}
                >
                  25%
                </button>
                <button
                  id='50'
                  role='option'
                  className={`app__tip-option ${tip == 50 ? 'selected' : ''}`}
                  onClick={handleSelectTip}
                >
                  50%
                </button>
                <input
                  className='app__tip-custom'
                  type='text'
                  placeholder='Custom'
                  value={customTip}
                  onChange={handleCustomTip}
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
                  value={numberOfPeople}
                  onChange={handleInput}
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
                <p className='app_result-value-value'>{tipPerPerson}</p>
              </div>
              <div className='app__result-value total'>
                <div className='app_result-value-text'>
                  <p className='app_result-value-text-top'>Total</p>
                  <p className='app_result-value-text-sub'>/person</p>
                </div>
                <p className='app_result-value-value'>{totalPerPerson}</p>
              </div>
            </div>

            <button className='app__result-reset' onClick={reset}>RESET</button>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
