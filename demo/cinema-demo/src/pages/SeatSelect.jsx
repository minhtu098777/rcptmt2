import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

export default function SeatSelect() {
  const { seats, setSeats, movie, soldSeats = [] } = useContext(BookingContext);
  const nav = useNavigate();

  const toggleSeat = seat => {
    // không cho chọn ghế đã bán
    if (soldSeats.includes(seat)) return;
    setSeats(
      seats.includes(seat)
        ? seats.filter(s => s !== seat)
        : [...seats, seat]
    );
  };

  return (
    <div className="container my-5 text-center">
      <h3 className="mb-3">{movie?.title || "Select Seat"} 🎬</h3>
      <p>Showtime: {movie?.showtime || "N/A"}</p>

      {/* Legend */}
      <div className="mb-3">
        <span className="badge bg-secondary me-2">Available</span>
        <span className="badge bg-success me-2">Selected</span>
        <span className="badge bg-danger">Sold</span>
      </div>

      {/* Seat Grid */}
      <div className="d-flex flex-wrap justify-content-center mb-4">
        {[...Array(30)].map((_, i) => {
          const seat = i + 1;
          const isSelected = seats.includes(seat);
          const isSold = soldSeats.includes(seat);

          let btnClass = "btn m-1";
          if (isSold) btnClass += " btn-danger disabled";
          else if (isSelected) btnClass += " btn-success";
          else btnClass += " btn-outline-secondary";

          return (
            <button
              key={seat}
              className={btnClass}
              onClick={() => toggleSeat(seat)}
              style={{ width: "50px", height: "50px", borderRadius: "8px" }}
            >
              {seat}
            </button>
          );
        })}
      </div>

      {/* Continue button */}
      <button
        className="btn btn-primary btn-lg"
        disabled={seats.length === 0}
        onClick={() => nav("/checkout")}
      >
        Continue
      </button>
    </div>
  );
}
