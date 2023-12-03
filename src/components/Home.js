import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../redux/actions/historyActions';

const Home = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState('');

  const handleSearch = () => {
    
    dispatch(addToHistory(word));
    
  };

  return (
    <div className='btn-search'>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
      <button id='btn' onClick={handleSearch}>Search</button>
      {/* Display search results here */}
    </div>
  );
};

export default Home;
