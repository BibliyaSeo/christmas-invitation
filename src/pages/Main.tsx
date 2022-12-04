import React from "react";
import { useNavigate } from "react-router-dom";
import MainChristmas from "../components/animations/MainChristmas";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="max-w-[450px]" onClick={() => navigate("/party")}>
        <MainChristmas />
      </div>
    </div>
  );
}
