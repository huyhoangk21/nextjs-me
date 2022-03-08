import React, { ReactNode } from 'react';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
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
    >
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default Code;
