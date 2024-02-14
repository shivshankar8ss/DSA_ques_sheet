import './App.css';
import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(0);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*()_+={}[]|?/><:;~`'";
    }
    for (let i = 1; i <= length; i++) {
      let c = Math.floor(Math.random() * str.length);
      pass += str.charAt(c);
    }
    setPassword(pass);
    setIsButtonClicked(false); // Reset the button state
  }, [length, numAllow, charAllow]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setIsButtonClicked(true);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-8 text-orange-400 bg-gray-700'>
      <h1 className="text-white text-center my-3">
        Password Generator!
      </h1>

      <div className='flex shadow overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 rounded-lg px-3'
          placeholder='password'
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPass}
          className={`outline-none ${isButtonClicked ? 'bg-green-500' : 'bg-red-400'} text-white py-0.5 px-3 rounded-lg`}
        >
          {isButtonClicked ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
