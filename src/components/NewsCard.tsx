import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <div className="rounded-lg bg-white p-4">
      <img
        src={news.image}
        alt={news.headline}
        className="w-full h-40 object-cover object-center rounded-md mb-4"
      />
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded-full"
          src={news.profile.avatar}
          alt={news.profile.name}
        />
        <div className="ml-3">
          <span className="text-sm font-semibold antialiased block leading-tight">
            {news.profile.name}
          </span>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{news.headline}</h2>
      <p className="mb-4">{news.summary}</p>

    </div>
  );
};

export default NewsCard;
