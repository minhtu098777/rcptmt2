import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

export default function SeatSelect() {
  const { seats = [], setSeats } = useContext(BookingContext);
  const nav = useNavigate();

  const toggleSeat = (seat) => {
    if (!Array.isArray(seats)) return;

    setSeats(
      seats.includes(seat)
        ? seats.filter((s) => s !== seat)
        : [...seats, seat]
    );
  };

  const canCheckout = Array.isArray(seats) && seats.length > 0;

  return (
    <div className="container py-5 text-center">
      <h3 className="mb-3">🪑 Select Seats</h3>

      {/* Seat map */}
      <div className="d-flex flex-wrap justify-content-center my-4">
        {[...Array(30)].map((_, i) => {
          const seat = i + 1;
          const selected = seats.includes(seat);

          return (
            <button
              key={seat}
              type="button"
              className={`btn m-1 ${
                selected ? "btn-success" : "btn-outline-secondary"
              }`}
              onClick={() => toggleSeat(seat)}
              aria-pressed={selected}
            >
              {seat}
            </button>
          );
        })}
      </div>

      {/* Selected seats info */}
      <p>
        <strong>Selected seats:</strong>{" "}
        {canCheckout ? seats.join(", ") : "None"}
      </p>

      {/* Checkout button */}
      <button
        className="btn btn-primary mt-3"
        disabled={!canCheckout}
        onClick={() => nav("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
