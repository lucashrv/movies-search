import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import MovieCard from './../components/MovieCard';
import './Movie.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const formatCurrency = (num) => {
    return num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [])

  return (
    <div className="movie-page">
      {movie && (
        <>
         <MovieCard  movie={movie} showLink={false} />
         <p className="tagline">{movie.tagline}</p>
         <div className="info">
          <h3>
            <BsWallet2 /> Orçamento:
            <p>{formatCurrency(Number(movie.budget))}</p>
          </h3>
         </div>
         <div className="info">
          <h3>
            <BsGraphUp /> Receita:
            <p>{formatCurrency(Number(movie.revenue))}</p>
          </h3>
         </div>
         <div className="info">
          <h3>
            <BsHourglassSplit /> Duração:
            <p>{movie.runtime} minutos</p>
          </h3>
         </div>
         <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill /> Descrição:
            <p>{movie.overview}</p>
          </h3>
         </div>
        </>)
      }
    </div>)
}

export default Movie