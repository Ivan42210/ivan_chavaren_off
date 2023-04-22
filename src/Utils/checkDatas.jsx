import { useEffect, useState } from "react"
import { getCategoryServices } from "../Services/API/getDatas";

export default function CheckDatas(){

    const [checkDatas, setCheck] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            getCategoryServices(setCheck)
        }

        fetchData()
    }, [])

    console.log('check serviceCategory')
    console.log(checkDatas)


    return(
        <>
        </>
    )
}