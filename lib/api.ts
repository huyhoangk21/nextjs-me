import qs from 'qs';
import { Article } from '../types/article';
import { Author } from '../types/author';
import { Pagination } from '../types/pagination';
import { Picture } from '../types/picture';

export const baseUrl = process.env.REACT_APP_BACKEND || 'http://localhost:1337';

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

type Response = {
  page?: Pagination;
  articles: Article[];
  error: boolean;
};

export const getArticles = async (): Promise<Response> => {
  try {
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

    if (data.errors || !data.data) {
      return { error: true, articles: [] };
    }

    return { error: false, ...responseParser(data) };
  } catch {
    return { error: true, articles: [] };
  }
};

export const getArticlesBySearch = async (
  searchTerm: string
): Promise<Response> => {
  try {
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

    if (data.errors || !data.data) {
      return { error: true, articles: [] };
    }

    return { error: false, ...responseParser(data) };
  } catch {
    return { error: true, articles: [] };
  }
};

export const getArticleBySlug = async (slug: string): Promise<Response> => {
  try {
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

    if (data.errors || !data.data) {
      return { error: true, articles: [] };
    }

    return { error: false, ...responseParser(data) };
  } catch {
    return { error: true, articles: [] };
  }
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
