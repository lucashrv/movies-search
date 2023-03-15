import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const imgURL = import.meta.env.VITE_IMG

function MovieCard({ movie, showLink = true }) {
    return (
        <div className="movie-card">
            <img src={imgURL + movie.poster_path} alt="Card movie" />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> { movie.vote_average }
            </p>
            {showLink &&
                <Link to={`/movie/${movie.id}`}>
                    Detalhes
                </Link>}
        </div>
    )
}

export default MovieCard