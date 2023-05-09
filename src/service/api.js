
import axios from 'axios';

export const getNews = async() => {
    const URL = "https://inshorts.deta.dev/news?category=";
    try{
        return await axios.get(`${URL}all`);
    }catch(error){
        console.log("Error while getNews api ",error);
    }
}