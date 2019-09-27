import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from './redux/States';
import './App.css';
import { queryWord } from './redux/Actions';


export function App() {
  const [input, setInput] = React.useState('');
  const cambridgeFQDN = 'https://dictionary.cambridge.org/dictionary/english-chinese-traditional/';
  let inputRef: HTMLInputElement;

  const iframOnLoad = () => {
    inputRef.focus();
    const contentWindow = document.getElementsByTagName("iframe")[0].contentWindow as Window;
    debugger;
    const iframeBody = contentWindow.document.getElementsByTagName("body")[0];
  };

  const vocabulary = useSelector((state: State) => state.vocabulary);
  const dispatch = useDispatch();
  const search = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInput(value);
    dispatch(queryWord(value));
  };

  return (
    <div>
      <input onInput={search}
        ref={(input) => { if (input) inputRef = input }} />
      <ul>
        {vocabulary.map(e => <li key={e}>{e}</li>)}
      </ul>
      <hr />
      <iframe src={cambridgeFQDN + input}
        onLoad={iframOnLoad} />
    </div>
  );
};

