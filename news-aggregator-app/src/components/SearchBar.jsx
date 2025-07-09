import React, { useState } from 'react';

function SearchBar({ setQuery, fetchNews }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setQuery(input);
    fetchNews();
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search news..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
