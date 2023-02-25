import { useState } from "react";
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('mediumVioletRed');
  const newButtonColor = buttonColor === 'mediumVioletRed' ? 'midNightBlue' : 'mediumVioletRed';

  const [disabler, setDisabler] = useState(true);
  const disabled = disabler === false ? true : false;
  
  const buttonColorTrimed = newButtonColor.replace(/([A-Z])/g, " $1").trim();
  const buttonColorLowered = buttonColorTrimed.toLowerCase();

  return (
    <div>
       <button style={{backgroundColor: buttonColor}}
       onClick={()=> setButtonColor(newButtonColor)}
       disabled={disabled}
       data-testid="buttonColor1"
       > 
        {buttonColor === 'gray' ? 'disabled' : `change to ${buttonColorLowered}` } 
       </button>

        <input type="checkbox" onClick={()=> {
          setDisabler(disabled); 
          const bgColor = disabled ? 'mediumVioletRed' : 'gray';
          setButtonColor(bgColor)}}
          data-testid="checkbox1"
          />

    </div>
  );
}

export default App;
