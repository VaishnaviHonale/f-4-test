import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  const searchHistory = useSelector((state) => state.history.searchHistory);

  return (
    <div className='history'>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
