import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import "./style.css";

function Timer() {
  const [mins, setMinutes] = useState(10);
  const [secs, setSeconds] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const redirection = () => {
    navigate("/loose");
  };

  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (location.pathname === "/") {
        clearInterval(sampleInterval);
      } else {
        if (secs > 0) {
          setSeconds(secs - 1);
        }
        if (secs === 0) {
          if (mins === 0) {
            clearInterval(sampleInterval);
          } else {
            setMinutes(mins - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div>
      {mins === 0 && secs === 0 ? (
        redirection()
      ) : (
        <p className="timer" id="timer">
          {" "}
          {mins}:{secs < 10 ? `0${secs}` : secs}
        </p>
      )}
    </div>
  );
}

export default Timer;
