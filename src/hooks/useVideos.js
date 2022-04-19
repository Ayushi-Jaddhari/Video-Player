import { useState,useEffect } from "react";
import Youtube from "../api/Youtube";

const useVideos =(defaultSerachTerm)=>{
    const [videos,setVideos] = useState([])
   
    useEffect(()=> {
        search(defaultSerachTerm)
    },[defaultSerachTerm]);

    const  search=async (term)=>{
        const response = await Youtube.get('/search',{
            params:{
                q:term
            }
        });
        setVideos(response.data.items);
    };

    return [videos,search];

}

export default useVideos;