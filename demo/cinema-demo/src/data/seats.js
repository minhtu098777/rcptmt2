export const initialSeats = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  label: `A${i + 1}`,
  status: "available" // available | selected | booked
}));
