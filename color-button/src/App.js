import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

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
      <button style={{ backgroundColor: checked ? 'gray' : buttonBackgroundColor }} onClick={handleClick} disabled={checked}>{buttonText}</button>
      <input 
        type='checkbox' 
        id="disable-button-checkbox" 
        defaultChecked={checked} 
        aria-checked={checked} 
        onChange={handleCheckboxChange} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
