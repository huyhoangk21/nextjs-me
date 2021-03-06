import { Author } from './author';
import { Picture } from './picture';

export interface Article {
  author: Author;
  picture: Picture;
  title: string;
  slug: string;
  topic: string;
  excerpt: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
