import { useContext, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const { movie, showtime, seats, resetBooking } = useContext(BookingContext);
  const nav = useNavigate();
  const totalPrice = seats.length * 100; // ví dụ 100k / ghế

  useEffect(() => {
    if (!movie) nav("/"); // nếu chưa có dữ liệu booking, quay về Home
    return () => resetBooking(); // reset khi rời trang
  }, []);

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-5 text-center">
        <h1 className="text-success mb-4">🎉 Booking Successful!</h1>

        {/* Thông tin vé */}
        <div className="mb-4">
          <h4>{movie.title}</h4>
          <p><strong>Showtime:</strong> {showtime}</p>
          <p><strong>Seats:</strong> {seats.join(", ")}</p>
          <p className="h5 mt-3"><strong>Total Paid:</strong> ${totalPrice}</p>
        </div>

        {/* Nút quay về Home */}
        <button
          className="btn btn-primary btn-lg"
          onClick={() => nav("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
