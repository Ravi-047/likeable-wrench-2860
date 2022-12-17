import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Bangalore");
  }, [navigate]);
  return <div>Landing</div>;
};

export default Landing;
