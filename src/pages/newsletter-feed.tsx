// src/pages/newsletter-feed.tsx
import React, { useState } from 'react';
import NewsletterCard from '../components/NewsletterCard';
import newsletter_data from '../mocked_data/newsletter_data';

const NewsletterFeed = () => {
  const [currentNewsletterIndex, setCurrentNewsletterIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentNewsletterIndex((prevIndex) => (prevIndex + 1) % newsletter_data.data.length);
  };

  const handlePreviousClick = () => {
    setCurrentNewsletterIndex((prevIndex) => (prevIndex - 1 + newsletter_data.data.length) % newsletter_data.data.length);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 twitter-feed text-black">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white ">
        <div className="p-5">
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">Newsletter Feed</h1>
          </div>
          <NewsletterCard newsletter={newsletter_data.data[currentNewsletterIndex]} />
          <div className="mt-3 flex space-x-4">
            <button onClick={handlePreviousClick} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Previous Newsletter</button>
            <button onClick={handleNextClick} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Next Newsletter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFeed;
