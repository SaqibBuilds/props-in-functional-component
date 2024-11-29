import { useState } from 'react';
import './App.css';
import PropsInFunctionalComponents from './PropsInFunctionalComponents';

function App() {
  const [changeName, setState] = useState(0);  
  return (
    <div className="App">
      <div class="appOutbound">
        <div class="appContainer">
          <div class="appIutbound">
            <h1>Props In Functional Components</h1>
            <PropsInFunctionalComponents numberValue = {changeName}/>
            <br></br>
            <div class="buttonsList">
              <div class="twoButtons">
                <button onClick={()=> {setState(changeName+1)}}>+</button>
                <button onClick={()=> {setState(changeName-1)}}>-</button>
              </div>
              <div class="loneButton">
                <button onClick={()=> {setState(0)}}>Rest</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
