import React from 'react';

const TwitterCard = ({ tweet }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${date.getMonth() + 1} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return (
    <div className="twitter-card">
      <div className="user-info">
        <h3 className="text-medium mt-2 text-black">{tweet.user.name}</h3>
        <p className="text-medium mb-5 text-gray-700">@{tweet.user.screen_name}</p>

      </div>
      <div className="tweet-text">
        <p className="my-2">{tweet.text}</p>
      </div>
      <div className="tweet-meta">
        {/* <p >{tweet.user.description}</p> */}
        <span className="text-base font-normal text-gray-600"> Read Full Thread<a href={tweet.user.url}>{tweet.user.url}</a></span>
        <p className="text-sm font-normal text-gray-600">Posted at: {formatDate(tweet.created_at)}</p>
      </div>
    </div>
  );
};

export default TwitterCard;

