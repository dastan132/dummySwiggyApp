import { useEffect, useState } from "react";
import {SWIG_API_INFO} from './Constants'

const useResturentMenu = (resId) => {
    const [resInfo , setResInfo] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const data = await fetch(SWIG_API_INFO + resId)
            const json = await data.json()
            console.log("Rest",json)
            setResInfo(json.data)
        }

        fetchData();
    }, [resId]);

    return resInfo
}

export default useResturentMenu;
