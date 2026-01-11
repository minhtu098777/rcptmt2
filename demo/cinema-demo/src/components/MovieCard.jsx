import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={movie.poster} className="card-img-top" />
        <div className="card-body">
          <h5>{movie.title}</h5>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary w-100">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
