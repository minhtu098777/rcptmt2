import { useNavigate } from "react-router-dom";
import { movies } from "../data/movies";

function Home() {
  const nav = useNavigate();

  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h4>Không có phim để hiển thị</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">🎬 Now Showing</h2>

      <div className="row">
        {movies.map((movie) => {
          const title = movie?.title || "Movie title";
          const poster = movie?.poster || "/placeholder.jpg";

          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={movie?.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={poster}
                  className="card-img-top"
                  alt={title}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    Genre: {movie?.genre || "Updating"}
                  </p>

                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => nav(`/movie/${movie.id}`)}
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
