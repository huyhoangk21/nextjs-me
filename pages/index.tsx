import { NextPage } from 'next/types';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col-reverse items-center gap-y-8 text-justify md:gap-x-10 md:pt-20 dark:text-white'>
      <div className='flex flex-col gap-y-3 md:max-w-sm xl:max-w-xl'>
        <h1 className='font-bold text-4xl md:text-4xl'>Hello.</h1>
        <h2 className='font-semibold text-2xl md:text-2xl'>
          My name is Hoang Le.
        </h2>
        <p className='md:text-lg'>
          I am an{' '}
          <Link href='https://acms.washington.edu/' passHref>
            <a target='_blank' className='text-blue-500'>
              applied & computational mathematical sciences
            </a>
          </Link>{' '}
          student from the University of Washington and an aspiring software
          developer. This is the place where I talk and discuss all sorts of
          topics related to computer science and software development. If you
          find anything interesting and would like to talk about, you can find
          me{' '}
          <Link href='/contact' passHref>
            <a className='text-blue-500'>here.</a>
          </Link>
        </p>
        <p className='md:text-lg'>
          In my free time, I enjoy playing tactical shooter games, walking my
          corgi, and visiting my favorite local coffee shop for a cup of Latte.
        </p>
      </div>
      <div className='rounded-image h-40 w-40 mx-auto'>
        <Image
          src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80'
          layout='fill'
          objectFit='cover'
          alt={`it's me`}
        />
      </div>
    </div>
  );
};

export default Home;
