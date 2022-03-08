import Link from 'next/link';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';
const Contact = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-20 dark:text-white'>
      <div className='text-2xl'>Find me here...</div>
      <div className='flex gap-x-10 sm:gap-x-20 text-5xl text-slate-300 my-7'>
        <Link href='https:/github.com/huyhoangk21' passHref>
          <a target='_blank'>
            <AiOutlineGithub className='hover:text-blue-500 cursor-pointer' />
          </a>
        </Link>
        <Link href='https://twitter.com/hoangple21' passHref>
          <a target='_blank'>
            <AiOutlineTwitter className='hover:text-blue-500 cursor-pointer' />
          </a>
        </Link>
        <Link href='https://linkedin.com/in/hoangp-le21' passHref>
          <a target='_blank'>
            <AiOutlineLinkedin className='hover:text-blue-500 cursor-pointer' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
