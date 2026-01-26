const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <button>Detail</button>
            <button>Book Tickets</button>
        </div>
    );
};

export default MovieCard;