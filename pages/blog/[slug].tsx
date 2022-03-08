import React, { Fragment } from 'react';
import Image from 'next/image';
import { baseUrl, getArticleBySlug, getArticles } from '../../lib/api';
import { Article } from '../../types/article';
import Time from '../../components/time';
import { serialize } from 'next-mdx-remote/serialize';
import Content from '../../components/content';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { CgSpinner } from 'react-icons/cg';
import Custom500 from '../500';

type BlogTypeProps = {
  articles: Article[];
  content?: MDXRemoteSerializeResult;
  error: boolean;
};

const Blog = ({ articles, content, error }: BlogTypeProps) => {
  const router = useRouter();

  if (error) {
    return <Custom500 />;
  }

  if (router.isFallback) {
    return (
      <div className='fixed inset-0 flex justify-center items-center animate-spin text-4xl text-blue-500'>
        <CgSpinner />
      </div>
    );
  }

  const article = articles[0];

  return (
    <Fragment>
      <NextSeo title={article.title} description={article.excerpt} />
      <div className='dark:text-gray-400 pt-4 pb-10'>
        <div className='flex gap-x-3 items-center'>
          <div className='rounded-image h-10 w-10'>
            <Image
              src={`${baseUrl}${article.author.profilePicture.url}`}
              alt={article.author.profilePicture.alternativeText}
              objectFit='cover'
              layout='fill'
            />
          </div>
          <div>
            <div className='dark:text-gray-100 font-bold'>
              {article.author.name}
            </div>
            <div className='text-slate-500 text-sm'>
              <Time>{article.createdAt}</Time>
            </div>
          </div>
        </div>
        <div className='font-bold text-2xl sm:text-3xl mt-6 my-10 dark:text-gray-100'>
          {article.title}
        </div>
        <Content content={content!} />
      </div>
    </Fragment>
  );
};

export default Blog;

export const getStaticPaths = async () => {
  const { articles, error } = await getArticles();

  if (error) {
    return { paths: [], fallback: true };
  }

  const paths = articles!.map(article => ({ params: { slug: article.slug } }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { articles, error } = await getArticleBySlug(params.slug);

  const props: BlogTypeProps = { error, articles };

  if (!error && articles.length > 0) {
    const mdxSource = await serialize(articles[0].content);
    props.content = mdxSource;
  }

  return {
    props,
  };
};
