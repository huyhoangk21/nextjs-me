import qs from 'qs';
import { Article } from '../types/article';
import { Author } from '../types/author';
import { Pagination } from '../types/pagination';
import { Picture } from '../types/picture';

export const baseUrl = process.env.BACKEND;

const articleQuery = {
  fields: [
    'title',
    'slug',
    'topic',
    'excerpt',
    'content',
    'updatedAt',
    'createdAt',
  ],
  sort: ['createdAt:desc'],
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
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${baseUrl}/api/articles?${query}`);

  const data = await res.json();

  return responseParser(data);
};

export const getArticlesBySearch = async (searchTerm: string) => {
  const query = qs.stringify(
    {
      ...articleQuery,
      filters: {
        $or: [
          {
            title: {
              $containsi: searchTerm,
            },
          },
          {
            topic: {
              $containsi: searchTerm,
            },
          },
          {
            content: {
              $containsi: searchTerm,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${baseUrl}/api/articles?${query}`);

  const data = await res.json();

  return responseParser(data);
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

  const data = await res.json();

  return responseParser(data);
};

const articleMapper = (rawArticle: any): Article => {
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

const responseParser = (data: any) => {
  const page: Pagination = data.meta;

  const articles: Article[] = data.data.map((rawArticle: any) =>
    articleMapper(rawArticle)
  );

  return { page, articles };
};
