// src/pages/profile.tsx
import React from 'react';
import Profile from '../components/Profile';

const UserProfilePage: React.FC = () => {
  const user = {
    name: 'John Doe',
    bio: 'Software Engineer & Tech Enthusiast',
    avatar: 'https://i.pravatar.cc/200',
    readArticles: 42,
    readSummaries: 100,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Profile user={user} />
    </div>
  );
};

export default UserProfilePage;
