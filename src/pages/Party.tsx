import React from "react";
import { useNavigate } from "react-router-dom";
import PartyChristmas from "../components/animations/PartyChristmas";

export default function Party() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="flex flex-col mb-12">
        <div className="max-w-[380px]">
          <PartyChristmas />
        </div>
        <div className="text-white text-center">
          <div className="text-xl christmas-font">Welcome to Chirstmas Party!</div>
        </div>
        <div className="space-x-4 flex justify-center py-10">
          <button
            onClick={() => navigate("/plan")}
            className="py-2 px-5 bg-green-800 text-white rounded-lg font-bold"
          >
            일정 안내
          </button>
          <button
            onClick={() => navigate("/place")}
            className="py-2 px-5 bg-red-600 text-white rounded-lg font-bold"
          >
            파티 위치
          </button>
        </div>
      </div>
    </div>
  );
}
