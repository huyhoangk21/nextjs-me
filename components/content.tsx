import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import Code from './code';

type ContentProps = {
  content: MDXRemoteSerializeResult;
};

const components = { Code };

const Content = ({ content }: ContentProps) => {
  return (
    <div className='prose dark:prose-invert max-w-none break-words'>
      <MDXRemote {...content} components={components} />
    </div>
  );
};

export default Content;
