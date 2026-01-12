import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [showtime, setShowtime] = useState(null);
  const [seats, setSeats] = useState([]);

  return (
    <BookingContext.Provider
      value={{
        movie,
        setMovie,
        showtime,
        setShowtime,
        seats,
        setSeats,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
