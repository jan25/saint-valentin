import { useState } from 'react';
import './App.css';
import Search from './Search';
import Letter from './Letter';
import { getRandomPrefix, getGenerated } from './generated';

function App() {
  const [data, setData] = useState({});

  const onPrefixSelect = (prefix) => {
    setData({
      prefix,
      letter: getGenerated(prefix),
    })
  };

  return (
    <div className="App">
      <Search prefix={data.prefix} onSelect={onPrefixSelect.bind(this)} />
      { data.prefix && <Letter prefix={data.prefix} letter={data.letter} /> }
    </div>
  );
}

export default App;
