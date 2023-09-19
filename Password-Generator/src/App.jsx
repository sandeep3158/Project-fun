import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@$#%^&*()_+={}?';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    passRef.current.select();
    passRef.current.setSelectionRange(0, 101); // Assuming the maximum length for the password
    navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  return (
    <div className="main">
      <h1>Password Generator</h1>
      <div className="input-field">
        <input type="text" id="field" value={password} readOnly ref={passRef} />
        <button className="btn" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className="features">
        <div className="length">
          <label htmlFor="len-slider">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            name="len-slider"
            id="range-len"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="char">
          <label htmlFor="characters">Include Characters</label>
          <input
            type="checkbox"
            name="characters"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>
        <div className="number">
          <label htmlFor="num">Include Numbers</label>
          <input
            type="checkbox"
            name="num"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
