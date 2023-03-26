// src/components/Profile.tsx
import BottomNav from '@/components/BottomNav';
import React, { useState } from 'react';

interface User {
  name: string;
  bio: string;
  avatar: string;
  readArticles: number;
  readSummaries: number;
}

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const { name, bio, avatar, readArticles, readSummaries } = user;
  const [articlesRead, setArticlesRead] = useState(readArticles);

  const handleArticleRead = () => {
    setArticlesRead(articlesRead + 1);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-8 max-w-lg mx-auto text-black">
      <div className="flex items-center justify-center mb-6">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">{name}</h1>
        <p className="text-gray-600 mb-6">{bio}</p>
        <div className="flex items-center justify-center space-x-12">
          <div>
            <h2 className="text-xl font-semibold mb-1 text-black">{articlesRead}</h2>
            <p className="text-gray-900">Read Articles</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1 text-black">{readSummaries}</h2>
            <p className="text-gray-900">Read Summaries</p>
          </div>
        </div>
      </div>
      <BottomNav scrollNewsUp={() => scrollNews("up")} scrollNewsDown={() => scrollNews("down")} />
    </div>
  );
};

export default Profile;
