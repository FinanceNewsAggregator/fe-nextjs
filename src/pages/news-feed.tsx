// src/pages/NewsFeed.tsx
import React, { useState } from 'react';
import NewsCard from '../components/NewsCard';
import newsData from '../mocked_data/data';

const NewsFeed = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const handlePreviousClick = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 news-feed text-black">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white ">
        <div className="p-5">
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">News Feed</h1>
          </div>
          <NewsCard news={newsData[currentNewsIndex]} />
          <div className="mt-3 flex space-x-4">
            <button onClick={handlePreviousClick} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Previous News</button>
            <button onClick={handleNextClick} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Next News</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
