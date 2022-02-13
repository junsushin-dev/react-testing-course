import './App.css';
import { useState } from 'react';

function App() {
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('red');
  const newButtonBackgroundColor = buttonBackgroundColor === 'red' ? 'blue' : 'red';
  const buttonText = `Change to ${newButtonBackgroundColor}`;

  const handleClick = () => {
    setButtonBackgroundColor(newButtonBackgroundColor)
  }

  return (
    <div>
      <button style={{ backgroundColor: buttonBackgroundColor }} onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default App;
