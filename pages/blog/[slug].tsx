import React from 'react';
import Image from 'next/image';
import { getArticleBySlug, getArticles } from '../../lib/api';
import { Article } from '../../types/article';
import Time from '../../components/time';
import { serialize } from 'next-mdx-remote/serialize';
import Content from '../../components/content';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type BlogTypeProps = {
  article: Article;
  content: MDXRemoteSerializeResult;
};

const Blog = ({ article, content }: BlogTypeProps) => {
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
      <Content content={content} />
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

  const mdxSource = await serialize(articles[0].content);

  return {
    props: {
      article: articles[0],
      content: mdxSource,
    },
  };
};
