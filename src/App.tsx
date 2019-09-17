import React from 'react';
import './App.css';


function App() {
  const [input, setInput] = React.useState('');
  let inputRef: HTMLInputElement;
  const search = (e: React.FormEvent<HTMLInputElement>) => setInput(e.currentTarget.value);
  const iframOnLoad = () => inputRef.focus();
  const cambridgeFQDN = 'https://dictionary.cambridge.org/dictionary/english-chinese-traditional/';
  return (
    <div>
      <input onInput={search}
        ref={(input) => { if (input) inputRef = input }} />
      <hr />
      <iframe src={cambridgeFQDN + input}
        onLoad={iframOnLoad} />
    </div>
  );
}

export default App;
