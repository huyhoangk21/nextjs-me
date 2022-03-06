import React from 'react';
import { Article } from '../types/article';
import { Data } from '../types/data';

type ArticlePreviewProps = {
  article: Data<Article>;
};

const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return <div>HEY</div>;
};

export default ArticlePreview;
