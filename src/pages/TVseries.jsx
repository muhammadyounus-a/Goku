import React from 'react'
import { useState, useEffect } from 'react'
import { movies } from '../utils/datas' 
import Cards from '../Components/Cards'

function TVseries() {
    const [count, setCount] = useState(0)
    const [url,setUrl] = useState("https://imdb-top-100-movies.p.rapidapi.com")
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(url,{
        headers:{
            'x-rapidapi-key':'60f98536aemshc3bda099eaf08e5p11ccb4jsn884af28e73b7'
        }
        })
        .then(response => response.json())
        .then(dt => setData(dt))
        .catch(error => console.error('Error fetching data:', error));
        console.log({data});
        
    }, [url]);
  return (
    <>
    <Cards data={movies} />

    {data.length > 0 &&
     data.map((it, i) => {
        <div key={i}>
            {it.title}
            <img src={it.image} alt="" />
        </div>
     })
    }
    </>
  )
}

export default TVseries
