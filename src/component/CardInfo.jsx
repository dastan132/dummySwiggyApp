
import ShimmerCard from "./ShimmerCard";
import { IMG_API } from "../Utils/Constants";
import useResturentMenu from "../Utils/useResturentMenu";
import { useParams } from "react-router-dom";

const CardInfo = () => {
  const {restId} = useParams();
  const resInfo = useResturentMenu(restId)

    if (!resInfo) {
    return <ShimmerCard />;
  }

console.log("new: ",resInfo)


  return (
  <><h1></h1></>
  );
};

export default CardInfo;