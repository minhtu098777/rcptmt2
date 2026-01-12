import { useContext, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { movie, showtime, seats } = useContext(BookingContext);
  const nav = useNavigate();

  useEffect(() => {
    if (!movie || !showtime || !Array.isArray(seats) || seats.length === 0) {
      nav("/");
    }
  }, [movie, showtime, seats, nav]);

  if (!movie || !showtime || !Array.isArray(seats)) {
    return (
      <div className="container mt-5 text-center">
        <h4>Dữ liệu đặt vé không hợp lệ</h4>
        <p>Đang quay về trang chủ...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3>🎟️ Xác nhận đặt vé</h3>

      <p>
        <strong>Phim:</strong> {movie?.title || "Không xác định"}
      </p>
      <p>
        <strong>Suất chiếu:</strong> {showtime}
      </p>
      <p>
        <strong>Ghế:</strong>{" "}
        {Array.isArray(seats) ? seats.join(", ") : ""}
      </p>

      <button
        className="btn btn-success"
        onClick={() => nav("/success")}
      >
        Thanh toán (demo)
      </button>
    </div>
  );
}

export default Checkout;
