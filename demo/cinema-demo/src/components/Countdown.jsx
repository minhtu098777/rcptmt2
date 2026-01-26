import { useEffect, useState } from "react";

function Countdown({ onExpire }) {
  const [time, setTime] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => {
        if (t <= 1) {
          onExpire();
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="alert alert-warning text-center">
      Save the seat: {Math.floor(time / 60)}:{time % 60}
    </div>
  );
}

export default Countdown;
