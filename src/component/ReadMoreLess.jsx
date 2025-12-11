import React, { useState } from "react";

const ReadMoreLess = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }
  return (
    <div className="transition-all duration-500 ease-in-out ">
      <p
        className={`overflow-hidden transition-all duration-500 ease-in-out 
        ${isExpanded ? "max-h-96" : "max-h-13"}`}
      >
        {text}{" "}
      </p>
      <button
        className="text-blue-800  sm:text-lg font-bold font-sans hover:text-blue-950 focus:outline-none transition-colors duration-300 cursor-pointer"
        onClick={toggleReadMore}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreLess;
