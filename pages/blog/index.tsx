import Link from 'next/link';
import { NextPage } from 'next/types';
import React from 'react';
import ArticlePreview from '../../components/article-preview';
import Search from '../../components/search';
import { useSearch } from '../../hooks/useSearch';
import { getArticles } from '../../lib/api';
import { Article } from '../../types/article';
import { Pagination } from '../../types/pagination';

type BlogsType = {
  recentArticles: Article[];
  page: Pagination;
};

const Blogs: NextPage<BlogsType> = ({ recentArticles, page }) => {
  const { articles: searchArticles, searchTerm } = useSearch();

  const articles = searchTerm.length !== 0 ? searchArticles : recentArticles;

  return (
    <div className='dark:text-white'>
      <div className='flex justify-between items-center pb-2'>
        <div className='font-bold text-2xl dark:text-gray-100'>Posts</div>
        <Search />
      </div>
      {articles.length === 0 && (
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
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const { articles, page } = await getArticles();

  return {
    props: {
      recentArticles: articles,
      page,
    },
  };
};
