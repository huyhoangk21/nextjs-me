import { Author } from './author';
import { Data } from './data';

export interface Article {
  author: { data: Data<Author> };
  title: string;
  slug: string;
  topic: string;
  excerpt: string;
  content: string;
  featured: boolean;
  publishedAt: Date;
  updatedAt: Date;
}
