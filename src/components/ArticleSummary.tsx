// src/components/ArticleSummary.tsx
import React, { useState, useEffect } from 'react';
import fetchSummary from '../helpers/fetchSummary';


function ArticleSummary({ content }: { content: string }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticleSummary = async () => {
      try {
        const fetchedSummary = await fetchSummary(content);
        setSummary(fetchedSummary);
      } catch (error) {
        console.error('Error fetching summary:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleSummary();
  }, [content]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto'>
      <h2>Summary:</h2>
      <p className='text-black'>{summary}</p>
    </div>
  );
}

export default ArticleSummary;
