import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PlaceChristmas from "../components/animations/PlaceChristmas";

export default function Place() {
  const navigate = useNavigate();
  const url = "https://naver.me/GI6VY6jY";
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="flex flex-col">
        <div>
          <button onClick={() => navigate(-1)} className="text-gray-800 christmas-font">
            Back
          </button>
        </div>
        <div className="max-w-[380px]">
          <PlaceChristmas />
        </div>
        <div className="bg-green-700 p-1 rounded-lg mx-6">
          <div className="bg-red-500 p-1 rounded-lg">
            <div className="bg-black text-white rounded-lg py-4 px-8">
              <div className="max-w-[380px] text-sm">
                <div className="font-bold text-xl mt-1 mb-4">
                  <span className="border-b-2 border-yellow-400 pb-1 italic">파티 위치</span>
                </div>
                <div className="mb-2 text-lg">경기도 안산시 단원구 대남로 310</div>
                <div>하늘 1호 (오션뷰, 글램핑바베큐장)</div>
                <div>거실+방(온돌룸1 + 화장실1) 객실</div>
                <div>야외 개별 글램핑 바베큐장</div>
                <div className="flex justify-end">
                  <button
                    onClick={() => window.open(url)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    자세한 설명
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
