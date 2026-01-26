export default function SeatMap({ seats, setSeats }) {
  const toggleSeat = id => {
    setSeats(prev =>
      prev.map(seat =>
        seat.id === id
          ? {
              ...seat,
              status:
                seat.status === "selected" ? "available" : "selected"
            }
          : seat
      )
    );
  };

  return (
    <div className="seats">
      {seats.map(seat => (
        <button
          key={seat.id}
          className={`seat ${seat.status}`}
          onClick={() => toggleSeat(seat.id)}
        >
          {seat.id}
        </button>
      ))}
    </div>
  );
}
