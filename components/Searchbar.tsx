import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const searchUrl = `https://www.google.com/search?q=${query}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          className="focus:outline-none border p-2 rounded-lg"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          required
        />
        <button type="submit" className="your-button-class-name">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
