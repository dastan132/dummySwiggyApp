import React, { useState } from "react";
// import cardData from "../Data/CardData";

const SearchBar = ({ resCards, onFilter, onReset, onSearch }) => {
  const [searchCard, setSearchCard] = useState("");
  const handleFilter = () => {
    const filteredList = resCards.filter((card) => card.rating > 4);
    onFilter(filteredList);
  };
  const handleReset = () => {
    onReset();
    setSearchCard("");
  };

  const handleSearch = () => {
    const filteredCards = resCards.filter((res) => 
      res.title.toLowerCase().includes(searchCard.toLowerCase())
    );
    onSearch(filteredCards)
  };
  return (
    <div className="relative w-full bg-gray-100 p-4">
      <div className="flex justify-center items-center">
        <div className="relative w-1/3">
          <input
            value={searchCard}
            onChange={(e) => setSearchCard(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pr-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-1 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      <button
        onClick={handleFilter}
        className="absolute top-4 right-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        Filter
      </button>

      <button
        onClick={handleReset}
        className=" absolute top-4 right-25  px-5 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
