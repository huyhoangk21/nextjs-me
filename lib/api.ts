import qs from 'qs';
import { Article } from '../types/article';
import { Author } from '../types/author';
import { Pagination } from '../types/pagination';
import { Picture } from '../types/picture';

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
    'featured',
  ],
  populate: {
    author: {
      fields: ['name'],
      populate: {
        profilePicture: {
          fields: ['alternativeText', 'url'],
        },
      },
    },
    picture: {
      fields: ['alternativeText', 'url'],
    },
  },
};

export const getArticles = async () => {
  const query = qs.stringify(
    {
      ...articleQuery,
      sort: ['publishedAt:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${baseUrl}/api/articles?${query}`);

  const data = await res.json();

  const page: Pagination = data.meta;

  const articles: Article[] = data.data.map((rawArticle: any) =>
    articleMapper(rawArticle)
  );

  return { articles, page };
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
      encodeValuesOnly: false,
    }
  );

  const res = await fetch(`${baseUrl}/api/articles?${query}`);

  const data = await res.json();

  return data;
};

export const articleMapper = (rawArticle: any): Article => {
  const profilePicture: Picture = {
    ...rawArticle.attributes.author.data.attributes.profilePicture.data
      .attributes,
  };

  const author: Author = {
    ...rawArticle.attributes.author.data.attributes,
    profilePicture,
  };

  const picture: Picture = {
    alternativeText:
      rawArticle.attributes.picture.data.attributes.alternativeText,
    url: rawArticle.attributes.picture.data.attributes.url,
  };

  return { ...rawArticle.attributes, author, picture };
};
