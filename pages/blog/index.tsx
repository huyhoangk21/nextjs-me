import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { NextPage } from 'next/types';
import React, { Fragment } from 'react';
import ArticlePreview from '../../components/article-preview';
import Search from '../../components/search';
import { useSearch } from '../../hooks/useSearch';
import { getArticles } from '../../lib/api';
import { Article } from '../../types/article';
import { Pagination } from '../../types/pagination';
import Custom500 from '../500';

type BlogsType = {
  recentArticles?: Article[];
  page?: Pagination;
  error: boolean;
};

const Blogs: NextPage<BlogsType> = ({ recentArticles, page, error }) => {
  const {
    articles: searchArticles,
    searchTerm,
    error: searchError,
  } = useSearch();

  if (error || searchError) {
    return <Custom500 />;
  }

  const articles = searchTerm.length !== 0 ? searchArticles : recentArticles;

  return (
    <Fragment>
      <NextSeo
        title='Blog'
        description='This is the place where I talk about all sorts of interesting things related to computer science and software developement'
      />
      <div className='dark:text-white'>
        <div className='flex justify-between items-center pb-2'>
          <div className='font-bold text-2xl'>Posts</div>
          <Search />
        </div>
        {articles?.length === 0 && (
          <div className='text-center mt-8'>No posts found.</div>
        )}
        <ul>
          {articles &&
            articles.map(article => (
              <Link key={article.slug} href={`/blog/${article.slug}`} passHref>
                <li>
                  <ArticlePreview article={article} />
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const { error, articles, page } = await getArticles();

  return {
    props: {
      recentArticles: articles,
      page,
      error,
    },
  };
};
