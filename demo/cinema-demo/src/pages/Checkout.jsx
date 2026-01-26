import { useContext, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { movie, showtime, seats } = useContext(BookingContext);
  const nav = useNavigate();

  useEffect(() => {
    if (!movie || !showtime || seats.length === 0) nav("/");
  }, []);

  if (!movie) return null;

  return (
    <div className="container mt-4">
      <h3>🎟️ Ticket Confirmation</h3>
      <p><b>Movie:</b> {movie.title}</p>
      <p><b>Showtime:</b> {showtime}</p>
      <p><b>Seats:</b> {seats.join(", ")}</p>

      <button
        className="btn btn-success"
        onClick={() => nav("/success")}
      >
        Payment
      </button>
    </div>
  );
}
