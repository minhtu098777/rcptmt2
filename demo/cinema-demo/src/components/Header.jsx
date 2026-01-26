import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        🎬 Cinema Booking
      </Link>
    </nav>
  );
}
