import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const title = movie?.title || movie?.name || "Movie poster";

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={movie?.poster || "/placeholder.jpg"}
        className="card-img-top"
        alt={title}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Category: {movie?.genre || "Đang cập nhật"}
        </p>

        {movie?.id && (
          <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-auto">
            View details
          </Link>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
