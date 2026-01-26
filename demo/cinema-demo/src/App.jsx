import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import SeatSelect from "./pages/SeatSelect";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      {/* Nội dung chính chiếm không gian còn lại */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/seat" element={<SeatSelect />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
