import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchUrl = `https://www.google.com/search?q=${query}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-flow-col items-center  overflow-hidden"
      >
        <input
          type="text"
          className="focus:outline-none border rounded-l-lg p-2 "
          placeholder="Search"
          value={query}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
          required
        />
        <button type="submit" className="bg-sky-500 h-full p-2 rounded-r-lg">
          <BiSearchAlt2 className="text-white hover:text-gray-300" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
