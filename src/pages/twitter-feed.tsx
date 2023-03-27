import React, { useState } from 'react';
import TwitterCard from '../components/TwitterCard';
import twitter_data from '../mocked_data/twitter_data';

const TwitterFeed = () => {
  const [currentTweetIndex, setCurrentTweetIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentTweetIndex((prevIndex) => (prevIndex + 1) % twitter_data.length);
  };

  const handlePreviousClick = () => {
    setCurrentTweetIndex((prevIndex) => (prevIndex - 1 + twitter_data.length) % twitter_data.length);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 twitter-feed text-black">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white ">
        <div className="p-5">
          <div className="relative flex h-20 w-full justify-center rounded-xl bg-cover" >
            {/* <img src="https://www.webxpro.es/wp-content/uploads/2014/11/twitter.jpg" class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" /> */}
            <div className="mt-2 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img className="h-full w-full rounded-full" src='https://i.pravatar.cc/200' alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">Twitter Feed</h1>
          </div>
          <TwitterCard tweet={twitter_data[currentTweetIndex]} />
          <div className="mt-3 flex space-x-4">
            <button onClick={handlePreviousClick} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Previous Tweet</button>
            <button onClick={handleNextClick} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Next Tweet</button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default TwitterFeed;
