import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => (
  <SyntaxHighlighter language={language} style={oneDark} wrapLongLines={true}>
    {children}
  </SyntaxHighlighter>
);

export default CodeBlock;