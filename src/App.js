import { useState } from 'react';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);
  const handleCounterClick = () => {
    setContador(contador + 1)
  }


  return (
    <div className="App">
      Compteur: {contador}
      <br/>
      <button
      onClick={handleCounterClick}
      >Aumentar compteur</button>    
    </div>
  );
}

export default App;
