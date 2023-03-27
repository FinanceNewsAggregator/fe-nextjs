// src/pages/newsletter-feed.tsx
import React from 'react';
import NewsletterCard from '../components/NewsletterCard';
import newsletter_data from '../mocked_data/newsletter_data';

const NewsletterFeed = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 newsletter-feed text-black">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white ">
        <div className="p-5">
          <h1 className="text-xl font-bold mb-4">Newsletter Feed</h1>
          <div>
            {newsletter_data.data.map((newsletter, index) => (
              <div key={newsletter.uuid} className={index !== 0 ? 'mt-4' : ''}>
                <NewsletterCard newsletter={newsletter} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFeed;
