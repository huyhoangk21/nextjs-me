import qs from 'qs';
import { Article } from '../types/article';
import { Response } from '../types/response';

const baseUrl = process.env.REACT_APP_BACKEND || 'http://localhost:1337';

const articleQuery = {
  fields: [
    'title',
    'slug',
    'topic',
    'excerpt',
    'content',
    'updatedAt',
    'publishedAt',
  ],
  populate: {
    author: {
      fields: ['name'],
    },
  },
};

export const getArticles = async () => {
  const query = qs.stringify(
    {
      ...articleQuery,
      sort: ['publishedAt:asc'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${baseUrl}/api/articles?${query}`);

  const data: Response<Article> = await res.json();

  return data;
};

export const getArticleBySlug = async (slug: string) => {
  const query = qs.stringify(
    {
      ...articleQuery,
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${baseUrl}/api/articles?${query}`);

  const data: Response<Article> = await res.json();

  return data;
};
