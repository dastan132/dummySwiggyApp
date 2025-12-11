import React, { useEffect, useState } from "react";
import Card from "./Card";
// import cardData from "../Data/CardData";
import SearchBar from "./SearchBar";
import ShimmerCard from "./ShimmerCard";
import { SWIG_API } from "../Utils/Constants";
import { IMG_API } from "../Utils/Constants";
import useOnlineStatus from "../Utils/useOnlineStatus";

const CardGrid = () => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [resCards, setResCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SWIG_API);

        const json = await response.json();

        const restaurants =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        console.log("Fetched restaurants:", restaurants);

        const formattedCards = restaurants.map((res) => ({
          id: res?.info?.id,
          title: res?.info?.name,
          location: res?.info?.locality,
          rating: res?.info?.avgRating,
          image: `${IMG_API}${res?.info?.cloudinaryImageId}`,

          description: res?.info?.cuisines?.join(", "),
        }));

        setResCards(formattedCards);
        setFilteredCards(formattedCards);
      } catch (error) {
        console.error("Error fetching Swiggy data:", error);
      }
    };

    fetchData();
  }, []);
  const resetFilter = () => {
    setFilteredCards(resCards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Your not connected to the internet!!</h1>;

  return resCards.length === 0 ? (
    <div className="animate-fadeIn">
      <ShimmerCard />
    </div>
  ) : (
    <>
      <SearchBar
        resCards={resCards}
        onFilter={setFilteredCards}
        onReset={resetFilter}
        onSearch={(list) => setFilteredCards(list)}
      />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                key={card.id}
                className="hover:scale-105 transform transition duration-300"
              >
                <Card
                  cardId={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  location={card.location}
                  rating={card.rating}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">No cards found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CardGrid;
