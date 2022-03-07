import React from 'react';
import Image from 'next/image';
import { getArticleBySlug, getArticles } from '../../lib/api';
import { Article } from '../../types/article';
import Time from '../../components/time';

type BlogTypeProps = {
  article: Article;
};

const Blog = ({ article }: BlogTypeProps) => {
  return (
    <div className='dark:text-gray-400'>
      <div className='flex gap-x-3 items-center'>
        <div className='rounded-image h-10 w-10'>
          <Image
            src={`http://localhost:1337${article.author.profilePicture.url}`}
            alt={article.author.profilePicture.alternativeText}
            objectFit='cover'
            layout='fill'
          />
        </div>
        <div>
          <div className='dark:text-gray-100'>{article.author.name}</div>
          <div className='text-slate-500 text-sm'>
            <Time>{article.createdAt}</Time>
          </div>
        </div>
      </div>
      <div className='font-bold text-2xl sm:text-3xl my-6 dark:text-gray-100'>
        {article.title}
      </div>
      <div className='leading-8'>{article.content}</div>
    </div>
  );
};

export default Blog;

export const getStaticPaths = async () => {
  const { articles } = await getArticles();
  const paths = articles.map(article => ({ params: { slug: article.slug } }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { articles } = await getArticleBySlug(params.slug);

  return {
    props: {
      article: articles[0],
    },
  };
};
