import { useEffect, useState } from "react"
import { SWIG_API,IMG_API } from "./Constants"


const useFetchCard = () => {
    const [loading, setLoading] = useState(true)
    const [filteredCards, setFilteredCards] = useState([]);
    const [resCards, setResCards] = useState([]);
    const [error, setError] = useState(null)

      useEffect(() => {
        const featchData = async () => {
            try{
                setLoading(true);
                const response = await fetch(SWIG_API);
                const json = await response.json()

                
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

        setResCards(formattedCards)
        setFilteredCards(formattedCards)
        

            }catch(err){
                console.error("Error fetching Swiggy data:", err)
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        featchData()

      },[])
    
    return{
        resCards,
        filteredCards,
        setFilteredCards,
        loading,
        error,
        
    }
}

export default useFetchCard