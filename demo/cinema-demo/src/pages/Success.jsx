import QRCode from "react-qr-code";

function Success() {
  return (
    <div className="container mt-4 text-center">
      <h2>Đặt vé thành công 🎉</h2>
      <QRCode value="BOOKING-DEMO-001" />
    </div>
  );
}

export default Success;
