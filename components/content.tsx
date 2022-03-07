import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

type ContentProps = {
  content: MDXRemoteSerializeResult;
};

const Content = ({ content }: ContentProps) => {
  return (
    <div className='leading-8 prose'>
      <MDXRemote {...content} />
    </div>
  );
};

export default Content;
