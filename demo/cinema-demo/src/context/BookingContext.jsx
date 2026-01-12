import { createContext, useState } from "react";

export const BookingContext = createContext({
  movie: null,
  setMovie: () => {},
  showtime: null,
  setShowtime: () => {},
  seats: [],
  setSeats: () => {},
  resetBooking: () => {},
});

export const BookingProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [showtime, setShowtime] = useState(null);
  const [seats, setSeats] = useState([]);

  const resetBooking = () => {
    setMovie(null);
    setShowtime(null);
    setSeats([]);
  };

  return (
    <BookingContext.Provider
      value={{
        movie,
        setMovie,
        showtime,
        setShowtime,
        seats,
        setSeats,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
