import React from 'react';

const categories = [
  'general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'
];

const countries = ['in', 'us', 'gb', 'au', 'ca'];

function FilterBar({ setCategory, setCountry }) {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat.toUpperCase()}</option>
        ))}
      </select>
      <select onChange={(e) => setCountry(e.target.value)}>
        {countries.map((ctry) => (
          <option key={ctry} value={ctry}>{ctry.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
