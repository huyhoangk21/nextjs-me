import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';
const Contact = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-20'>
      <div className='text-2xl'>Find me here...</div>
      <div className='flex gap-x-10 sm:gap-x-20 text-5xl text-slate-300 my-7'>
        <AiOutlineGithub className='hover:text-blue-500 cursor-pointer' />
        <AiOutlineTwitter className='hover:text-blue-500 cursor-pointer' />
        <AiOutlineLinkedin className='hover:text-blue-500 cursor-pointer' />
      </div>
    </div>
  );
};

export default Contact;
