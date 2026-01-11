import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";
import { showtimes } from "../data/showtimes";

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id == id);

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      <h4>Suất chiếu</h4>
      {showtimes.map(st => (
        <Link
          key={st.id}
          to={`/seats/${st.id}`}
          className="btn btn-outline-primary me-2"
        >
          {st.time}
        </Link>
      ))}
    </div>
  );
}

export default MovieDetail;
