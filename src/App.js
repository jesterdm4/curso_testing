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
       > 
        change to {newButtonColor}
       </button>

        <input type="checkbox" onClick={()=> setDisabler(disabled)}/>

    </div>
  );
}

export default App;
