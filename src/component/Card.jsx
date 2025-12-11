import { Link } from "react-router-dom";


const Card = ({ image, title, rating, location }) => {
  return (
    <div className=" h-130 bg-white border border-gray-200 rounded-2xl shadow-lg w-80 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        alt={title}
        src={image || "https://via.placeholder.com/300x200?text=No+Image"}
        className="rounded-t-2xl w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>

          <p className="text-sm text-gray-500 mb-1">{location}</p>
          <p className="text-yellow-500 mb-2">⭐ {rating}</p>

        </div>

        <div className=" flex justify-center">
          <Link to={`/cardinfo/${title}`}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
