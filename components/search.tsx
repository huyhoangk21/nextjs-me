import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <div className='w-56 relative'>
      <input
        type='text'
        placeholder='search posts...'
        className='h-full w-full border rounded-3xl py-2 pl-8 pr-3'
      />
      <AiOutlineSearch className='absolute left-2 top-3' />
    </div>
  );
};

export default Search;
