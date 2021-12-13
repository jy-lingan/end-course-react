import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [pelis, setPelis] = useState(null)

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=b44049bd4fa28000ad2219441907e307')
      .then(res => {
        setPelis(res.data)
      })
  }, [])


  return (
    <div>
      {pelis &&
        <div>
          <h1>{pelis.title}</h1>
          <img src={`pelis.poster_path${pelis.poster_path}`} alt={pelis.title} />
          <p>{pelis.overview}</p>
        </div>
      }
      {/* <img src={pelis.poster_path} alt=""/> */}
      
    </div>
  )
}

export default Home