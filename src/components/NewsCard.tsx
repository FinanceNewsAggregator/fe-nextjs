// src/components/NewsCard.tsx
import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <div className="rounded-lg bg-white p-4">
      <h2 className="text-xl font-semibold mb-2">{news.headline}</h2>
      <ul className="list-disc list-inside">
        {news.bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;

