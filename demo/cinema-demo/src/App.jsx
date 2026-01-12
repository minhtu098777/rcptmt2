import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import SeatSelect from "./pages/SeatSelect";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/seat" element={<SeatSelect />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
