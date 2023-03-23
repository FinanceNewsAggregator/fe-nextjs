import React from 'react';

import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
  { value: "fox", label: "stocks" },
  { value: "1", label: "AI" },
  { value: "2", label: "Sillicon Valey" },
  { value: "3", label: "Robotics" },
  { value: "4", label: "Chat GPT" },
  { value: "5", label: "Cryptocurrency" },
  { value: "6", label: "Venture Capital" },
  { value: "7", label: "Business" }
];

const TagsPage: React.FC = () => {
  const [animal, setAnimal] = useState(null);

  const handleChange = value => {
    console.log("value:", value);
    setAnimal(value);
  };
  return <div>
    <Select
      value={animal}
      onChange={handleChange}
      options={options}
    />
  </div>;
}

export default TagsPage;