function Seat({ seat, onSelect }) {
  const cls =
    seat.status === "available" ? "btn-outline-secondary" :
    seat.status === "selected" ? "btn-success" :
    "btn-danger";

  return (
    <button
      className={`btn ${cls} m-1`}
      disabled={seat.status === "booked"}
      onClick={() => onSelect(seat.id)}
    >
      {seat.label}
    </button>
  );
}

export default Seat;
