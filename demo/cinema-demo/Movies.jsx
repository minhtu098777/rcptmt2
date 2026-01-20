import Movies from "../data/movies";
import MovieCard from "./MovieCard";

const Movies = () => {
    return (
        <section className="movies">
            <h2>Now Showing</h2>
            <div className="movie-list">
                {Movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </section>
    );
};

export default Movies;