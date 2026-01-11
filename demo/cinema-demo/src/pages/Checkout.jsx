import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4 text-center">
      <h3>Thanh toán</h3>
      <button
        className="btn btn-success mt-3"
        onClick={() => setTimeout(() => navigate("/success"), 1000)}
      >
        Thanh toán giả
      </button>
    </div>
  );
}

export default Checkout;
