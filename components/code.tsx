import React, { ReactNode } from 'react';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import syntaxStyle from '../styles/syntaxHighlighter';

type CodeProps = {
  language: string;
  children: ReactNode;
};

const Code = ({ language, children }: CodeProps) => {
  return (
    <ReactSyntaxHighlighter
      language={language}
      style={syntaxStyle}
      wrapLongLines
      customStyle={{
        fontFamily: 'ui-monospace',
        // color: 'var(--tw-prose-pre-code)',
        backgroundColor: 'var(--tw-prose-pre-bg)',
      }}
    >
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default Code;
