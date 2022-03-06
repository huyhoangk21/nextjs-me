import React from 'react';
import Image from 'next/image';
import { Article } from '../types/article';
import Moment from 'react-moment';

type ArticlePreviewProps = {
  article: Article;
};

const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return (
    <div className='cursor-pointer border-t py-4'>
      <div className='flex items-center gap-x-3'>
        <div className='relative h-8 w-8 rounded-full overflow-hidden'>
          <Image
            src={`http://localhost:1337${article.author.profilePicture.url}`}
            alt={article.author.profilePicture.alternativeText}
            objectFit='cover'
            layout='fill'
          />
        </div>
        <div className='font-semibold'>{article.author.name}</div>
        <div className='text-slate-500'>
          <Moment
            fromNowDuring={7 * 24 * 60 * 60 * 1000}
            interval={1 * 60 * 1000}
            format='MMM DD, YYYY'
          >
            {article.publishedAt}
          </Moment>
        </div>
      </div>
      <div className='mt-2 flex gap-x-1 sm:gap-x-7 justify-between'>
        <div>
          <div className='font-bold sm:text-xl mb-1'>{article.title}</div>
          <div className='hidden sm:block'>{article.excerpt}</div>
          <div className='rounded-full inline-block text-sm px-3 py-0.5 mt-4 bg-gray-200 dark:bg-slate-500'>
            {article.topic}
          </div>
        </div>
        <div className='relative basis-24 h-24 border flex-shrink-0 sm:basis-28 sm:h-28'>
          <Image
            src={`http://localhost:1337${article.picture.url}`}
            alt={article.picture.alternativeText}
            objectFit='cover'
            layout='fill'
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
