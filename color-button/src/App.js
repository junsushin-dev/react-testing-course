import './App.css';
import { useState } from 'react';

function App() {
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('red');
  const [checked, setChecked] = useState(false);

  const newButtonBackgroundColor = buttonBackgroundColor === 'red' ? 'blue' : 'red';
  const buttonText = `Change to ${newButtonBackgroundColor}`;

  const handleClick = () => {
    setButtonBackgroundColor(newButtonBackgroundColor);
  }
  
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div>
      <button style={{ backgroundColor: buttonBackgroundColor }} onClick={handleClick} disabled={checked}>{buttonText}</button>
      <input 
        type='checkbox' 
        id="disable-button-chekbox" 
        defaultChecked={checked} 
        aria-checked={checked} 
        onChange={handleCheckboxChange} />
    </div>
  );
}

export default App;
