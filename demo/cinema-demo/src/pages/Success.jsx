import { useContext, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";

export default function Success() {
  const { resetBooking } = useContext(BookingContext);

  useEffect(() => {
    resetBooking();
  }, [resetBooking]);

  return (
    <div className="container py-5 text-center">
      <h2>🎉 Booking Successful!</h2>
      <p>Enjoy your movie 🍿</p>
    </div>
  );
}
