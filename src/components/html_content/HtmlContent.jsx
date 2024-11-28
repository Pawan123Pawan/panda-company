import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

function HtmlContent({ htmlContent }) {
  const cleanHtml = DOMPurify.sanitize(htmlContent);
  return <div>{parse(cleanHtml)}</div>;
}

export default HtmlContent;
