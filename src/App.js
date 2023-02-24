import { useState } from "react";
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const [disabler, setDisabler] = useState(true);
  const disabled = disabler === false ? true : false;
  
  return (
    <div>
       <button style={{backgroundColor: buttonColor}}
       onClick={()=> setButtonColor(newButtonColor)}
       disabled={disabled}
       data-testid="buttonColor1"
       > 
        {buttonColor === 'gray' ? 'disabled' : `change to ${newButtonColor}` } 
       </button>

        <input type="checkbox" onClick={()=> {
          setDisabler(disabled); 
          const bgColor = disabled ? 'red' : 'gray';
          setButtonColor(bgColor)}}
          data-testid="checkbox1"
          />

    </div>
  );
}

export default App;
