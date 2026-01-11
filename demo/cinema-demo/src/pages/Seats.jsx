import { useState } from "react";
import { initialSeats } from "../data/seats";
import SeatMap from "../components/SeatMap";
import Countdown from "../components/Countdown";
import { useNavigate } from "react-router-dom";

function Seats() {
  const [seats, setSeats] = useState(initialSeats);
  const navigate = useNavigate();

  const expire = () => {
    setSeats(seats.map(s =>
      s.status === "selected" ? { ...s, status: "available" } : s
    ));
  };

  return (
    <div className="container mt-4">
      <Countdown onExpire={expire} />
      <SeatMap seats={seats} setSeats={setSeats} />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          localStorage.setItem("selectedSeats", JSON.stringify(seats));
          navigate("/checkout");
        }}
      >
        Tiếp tục
      </button>
    </div>
  );
}

export default Seats;
