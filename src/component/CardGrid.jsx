import Card from "./Card";

import SearchBar from "./SearchBar";
import ShimmerCard from "./ShimmerCard";

import useOnlineStatus from "../Utils/useOnlineStatus";
import useFetchCard from "../Utils/useFetchCard";

const CardGrid = () => {
  const { resCards, filteredCards, setFilteredCards, loading, error } =
    useFetchCard();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Your not connected to the internet!!</h1>;

  if (loading) {
    return (
      <div className="animate-fadeIn">
        <ShimmerCard />
      </div>
    );
  }

  if (error) {
    return <h1>Something went wrong while fetching data</h1>;
  }
  return (
    <>
      <SearchBar
        resCards={resCards}
        onFilter={setFilteredCards}
        onReset={() => setFilteredCards(resCards)}
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
