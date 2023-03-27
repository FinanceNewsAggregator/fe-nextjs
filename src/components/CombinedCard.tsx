// src/components/CombinedCard.tsx
import React from 'react';
import NewsCard from '../components/NewsCard';
import NewsletterCard from '../components/NewsletterCard';
import TwitterCard from '../components/TwitterCard';

const CombinedCard = ({ item }) => {
  switch (item.type) {
    case 'news':
      return <NewsCard news={item} />;
    case 'newsletter':
      return <NewsletterCard newsletter={item} />;
    case 'twitter':
      return <TwitterCard tweet={item} />;
    default:
      return null;
  }
};

export default CombinedCard;
