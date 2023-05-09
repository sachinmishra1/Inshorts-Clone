import { useState, useEffect } from 'react';
import { getNews } from '../service/api';
import {Box} from '@mui/material';
import Article from './Article';

function Articles() {

    const [news,setNews] = useState([]);

    useEffect(()=>{
        dailyNews();
    },[]);

    const dailyNews = async() =>{
        let response = await getNews();
        // console.log(response.data);
        setNews(response.data.data);
        console.log(response.data.data);
    }

  return (
    <Box>
      {
        news.map((data) => (
        // console.log(data);
          <Article key={data.url} article={data}/>
        ))
      }
    </Box>
  )
}

export default Articles