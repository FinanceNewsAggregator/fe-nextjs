import React, { useState } from 'react';
import TwitterCard from '../components/TwitterCard';
import twitter_data from '../mocked_data/twitter_data';

const TwitterFeed = () => {
  const [currentTweetIndex, setCurrentTweetIndex] = useState(0);

  const handleClick = () => {
    setCurrentTweetIndex((prevIndex) => (prevIndex + 1) % twitter_data.length);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 twitter-feed text-black">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white ">
        <div className="p-5">
          <h1>Twitter Feed</h1>
          <TwitterCard tweet={twitter_data[currentTweetIndex]} />
          <div className="mt-3">
            <button onClick={handleClick} className="w-full rounded-md bg-black py-2 text-white hover:bg-white hover:shadow-md duration-75 hover:text-black">Next Tweet</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TwitterFeed;
