import Seat from "./Seat";

function SeatMap({ seats, setSeats }) {
  const selectSeat = (id) => {
    setSeats(seats =>
      seats.map(s =>
        s.id === id && s.status === "available"
          ? { ...s, status: "selected" }
          : s
      )
    );
  };

  return (
    <div className="text-center">
      {seats.map(seat => (
        <Seat key={seat.id} seat={seat} onSelect={selectSeat} />
      ))}
    </div>
  );
}

export default SeatMap;
