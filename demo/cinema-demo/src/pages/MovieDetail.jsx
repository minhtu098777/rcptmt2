import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";
import { useContext, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";

export default function MovieDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { setMovie, setShowtime } = useContext(BookingContext);

  const movie = movies.find(m => String(m.id) === id);

  useEffect(() => {
    if (!movie) nav("/");
    else setMovie(movie);
  }, []);

  if (!movie) return null;

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>

      <iframe
        width="100%"
        height="400"
        src={movie.trailer}
        title={movie.title}
        allowFullScreen
      />

      <h5 className="mt-3">Select Showtime</h5>

      {movie.showtimes.map(time => (
        <button
          key={time}
          className="btn btn-outline-primary me-2"
          onClick={() => {
            setShowtime(time);
            nav("/seat");
          }}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
