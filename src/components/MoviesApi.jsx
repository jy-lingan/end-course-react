import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Context } from "../context/Context"
import { cleanup } from '@testing-library/react'


const MoviesApi = () => {

    const [peli, setPeli] = useState(null)

    const { state, setState } = useContext(Context)

    let pelicula = []

    function todaLaCarta(cartaParametro) {

        pelicula = state;

        let infoPelicula = {
            id: cartaParametro.id,
            title: cartaParametro.title,
            poster_path: cartaParametro.poster_path,
            overview: cartaParametro.overview,
            release_date: cartaParametro.release_date,
            vote_average: cartaParametro.vote_average,
            popularity: cartaParametro.popularity,
            original_language: cartaParametro.original_language,
          
            /*       nombre: cartaParametro.children.[0].innerText,
                  imagen: cartaParametro.children.[1].innerText,
                  fecha: cartaParametro.children.[2].innerText,
                  descripcion: cartaParametro.children.[3].innerText, */
        }

        if (state === null) {

            pelicula.push(infoPelicula)

        } else {
            pelicula = state;
            pelicula.push(infoPelicula)
        }

        setState(pelicula)
    }


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=647e2d6ce4e1a6848a1b1c26a3107048&language=es')
            .then(function (response) {
                // handle success    
                const lista = response.data.results.map((peliculas, indice) => peliculas =
                    <div className="d-flex card mb-3 mx-auto" key={indice} style={{ width: '15em' }}>
                        <div className="card-body">
                            <h5 className="card-header">{peliculas.original_title}</h5>
                            <img src={'https://image.tmdb.org/t/p/w200' + peliculas.poster_path} className="card-img-top w-50" alt="..." />
                            <p className="card-text"> Estreno: {peliculas.release_date}</p>
                            <p className="card-text" style={{ display: 'none' }}>{peliculas.overview}</p>
                            <button className="btn btn-dark" onClick={(e) => todaLaCarta(e.target.parentNode.parentNode)}> VER MAS! </button>
                        </div>
                    </div>
                )
                setPeli(lista)
            })
/*         return () => {
            cleanup
        } */
    })

    return (
        <div className='row'>
            <h1> Peliculas populares </h1>
            {peli}
        </div>
    )
}

export default MoviesApi;
