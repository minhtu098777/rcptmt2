import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

export default function SeatSelect() {
  const { seats, setSeats } = useContext(BookingContext);
  const nav = useNavigate();

  const toggleSeat = (s) => {
    setSeats(
      seats.includes(s) ? seats.filter((x) => x !== s) : [...seats, s]
    );
  };

  return (
    <div className="container py-5 text-center">
      <h3>Chọn ghế</h3>

      <div className="d-flex flex-wrap justify-content-center my-4">
        {[...Array(30)].map((_, i) => {
          const seat = i + 1;
          return (
            <button
              key={seat}
              className={`btn m-1 ${
                seats.includes(seat) ? "btn-success" : "btn-outline-secondary"
              }`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <button className="btn btn-primary" onClick={() => nav("/checkout")}>
        Thanh toán
      </button>
    </div>
  );
}
