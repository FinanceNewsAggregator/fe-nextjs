import React from 'react';
import { useRef, useState } from "react";

import useIsInViewport from "../components/useIsInViewport";



const NewsCard: React.FC = ({ index, lastNewsIndex, getNews }) => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);
  const [loadNewNewsAt, setloadNewNewsAt] = useState(lastNewsIndex);

  if (isInViewport) {
    if (loadNewNewsAt === Number(elementRef.current.id)) {
      // increase loadNewNewsAt by 2
      setloadNewNewsAt((prev) => prev + 2);
      getNews(3);
    }
  }

  return <div className="slider-children">
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
      <h1>News {index}</h1>
    </div>
  </div>
}

export default NewsCard;