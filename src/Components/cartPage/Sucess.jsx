import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sucess_img from "../../Assets/Payment-success.png";
import "./payment.css";

const Sucess = () => {
  const [countdown, setCountdown] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(intervalId);
      navigate("/");
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown, navigate]);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="__countdown__timer__">
        Redirecting to home page in <span>{countdown} </span> seconds...
      </div>
      <div className="_payment__sucess_">
        <img src={sucess_img} alt="" />
      </div>
      <button
        className="__button__home__"
        title="Go to HOME"
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
};

export default Sucess;
