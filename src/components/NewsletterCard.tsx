// src/components/NewsletterCard.tsx
import React from 'react';

const NewsletterCard = ({ newsletter }) => {
  return (
    <div className="rounded-lg bg-white p-4">
      <h3 className="text-lg font-semibold mb-2">{newsletter.title}</h3>
      <p className="text-sm text-gray-600">{newsletter.content}</p>
      <div className="mt-4">
        <a
          href={newsletter.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 font-semibold hover:text-indigo-800"
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default NewsletterCard;
