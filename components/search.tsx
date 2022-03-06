import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearch } from '../hooks/useSearch';

const Search = () => {
  const { searchTerm, onSearchChange } = useSearch();

  return (
    <div className='w-56 relative'>
      <input
        type='text'
        placeholder='search posts...'
        className='h-full w-full border rounded-3xl py-2 pl-8 pr-3'
        value={searchTerm}
        onChange={onSearchChange}
      />
      <AiOutlineSearch className='absolute left-2 top-3' />
    </div>
  );
};

export default Search;
