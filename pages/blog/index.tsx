import Link from 'next/link';
import { NextPage } from 'next/types';
import React from 'react';
import ArticlePreview from '../../components/article-preview';
import Search from '../../components/search';
import { getArticles } from '../../lib/api';
import { Article } from '../../types/article';
import { Pagination } from '../../types/pagination';

type BlogsType = {
  articles: Article[];
  page: Pagination;
};

const Blogs: NextPage<BlogsType> = ({ articles, page }) => {
  return (
    <div>
      <div className='flex justify-between items-center pb-2'>
        <div className='font-bold text-2xl'>Posts</div>
        <Search />
      </div>
      <ul>
        {articles.map(article => (
          <Link key={article.slug} href={`/${article.slug}`} passHref>
            <li>
              <ArticlePreview article={article} />
            </li>
          </Link>
        ))}
      </ul>
      <div className='mx-auto'>Load More Articles</div>
    </div>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const { articles, page } = await getArticles();

  return {
    props: {
      articles,
      page,
    },
  };
};
