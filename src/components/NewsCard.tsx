import React from 'react';
import { useRef, useState } from "react";
import useIsInViewport from "../components/useIsInViewport";
import newsData from '../mocked_data/data';

const NewsCard: React.FC = ({ index }) => {
  const newsItem = newsData[index - 1]; // Subtract 1 to match array index
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  return (
    <div className="slider-children">
      <div
        ref={elementRef}
        id={index}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100%",
        }}
      >
        {newsItem ? (
          <div>
            <h1>{newsItem.headline}</h1>
            <ul>
              {newsItem.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );

}

export default NewsCard;
