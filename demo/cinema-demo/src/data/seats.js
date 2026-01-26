export const initialSeats = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  status: "available" // available | selected | booked
}));
