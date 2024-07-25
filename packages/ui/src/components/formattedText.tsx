'use client';
import React from 'react';

const FormattedText: React.FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  // Split the text based on the delimiter "__@__"
  const parts = children.split('__@__');

  // Extract the tag and content
  const tag = parts[0]?.toLowerCase();
  const content = parts[1];

  // Dynamically render the appropriate HTML tag based on the extracted tag
  switch (tag) {
    case 'h1':
      return <h1 className={className}>{content}</h1>;
    case 'h2':
      return <h2 className={className}>{content}</h2>;
    case 'h3':
      return <h3 className={className}>{content}</h3>;
    case 'h4':
      return <h4 className={className}>{content}</h4>;
    case 'h5':
      return <h5 className={className}>{content}</h5>;
    case 'h6':
      return <h6 className={className}>{content}</h6>;
    case 'span':
      return <span className={className}>{content}</span>;
    case 'div':
      return <div className={className}>{content}</div>;
    case 'em':
      return <em className={className}>{content}</em>;
    case 'strong':
      return <strong className={className}>{content}</strong>;
    case 'blockquote':
      return <blockquote className={className}>{content}</blockquote>;
    case 'code':
      return <code className={className}>{content}</code>;
    case 'pre':
      return <pre className={className}>{content}</pre>;
    // Add more cases as needed
    default:
      // If the tag is not recognized, render the content as fragment
      return <p className={className}>{children}</p>;
  }
};

export default FormattedText;
