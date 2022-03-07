import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

type ContentProps = {
  content: MDXRemoteSerializeResult;
};

const Content = ({ content }: ContentProps) => {
  return (
    <div className='prose dark:prose-invert max-w-none'>
      <MDXRemote {...content} />
    </div>
  );
};

export default Content;
