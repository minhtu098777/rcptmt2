import { movies } from "../data/movies";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🎬 Now Showing</h2>
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100">
              <img src={movie.poster} className="card-img-top" />
              <div className="card-body">
                <h5>{movie.title}</h5>
                <p>{movie.genre}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => nav(`/movie/${movie.id}`)}
                >
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
