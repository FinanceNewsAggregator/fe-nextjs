import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <div className="rounded-lg bg-white p-4">
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-40 object-cover object-center rounded-md mb-4"
      />
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded-full"
          src={news.creator}
          alt={news.creator}
        />
        <div className="ml-3">
          <span className="text-sm font-semibold antialiased block leading-tight">
            {news.creator}
          </span>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
      <p className="mb-4">{news.description}</p>
    </div>
  );
};

export default NewsCard;

