import useResturentMenu from "../Utils/useResturentMenu";
import ShimmerCard from "./ShimmerCard";
import CardDetails from "./Card";

const CardInfo = () => {
  const {         CardInfo,
         } = useResturentMenu();

  return (
    <>

          {CardInfo.length > 0 ? (
            CardInfo.map((card) => (
              <div
                key={card.id}
              
              >
                <CardDetails
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
            <p >No cards found.</p>
          )}

    </>
  );
};

export default CardInfo;
