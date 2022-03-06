import Link from 'next/link';
import { NextPage } from 'next/types';
import React from 'react';
import ArticlePreview from '../../components/article-preview';
import { getArticles } from '../../lib/api';
import { Article } from '../../types/article';
import { Data } from '../../types/data';
import { Pagination } from '../../types/pagination';

type BlogsType = {
  data: Data<Article>[];
  meta?: Pagination;
};

const Blogs: NextPage<BlogsType> = ({ data, meta }) => {
  return (
    <div>
      <ul>
        {data.map(article => (
          <Link
            key={article.attributes.slug}
            href={`/${article.attributes.slug}`}
            passHref
          >
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
  const { data, meta } = await getArticles();

  return {
    props: {
      data,
      meta,
    },
  };
};
