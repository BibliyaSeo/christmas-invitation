import React from "react";
import { useNavigate } from "react-router-dom";
import BlackChristmasTree from "../components/animations/BlackChristmasTree";

export default function Plan() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="flex flex-col">
        <div className="max-w-[380px]">
          <BlackChristmasTree />
        </div>
        <div className="bg-green-700 p-1 rounded-lg mx-6 mt-4">
          <div className="bg-red-500 p-1 rounded-lg">
            <div className="bg-black text-white rounded-lg py-4 px-8">
              <div className="max-w-[380px] text-sm">
                <div className="font-bold text-xl mt-1 mb-4">
                  <span className="border-b-2 border-yellow-400 pb-1 italic">일정 안내</span>
                </div>
                <div>날짜: 2022년 12월 24일(토)</div>
                <div>출발 시간: 15:00</div>
                <div className="font-bold text-xl mt-4 mb-4">
                  <span className="border-b-2 border-yellow-400 pb-1 italic">무엇을 할까요?</span>
                </div>
                {/* <div>1. 어색한 자기소개</div> */}
                <div>1. 장보기</div>
                <div>2. 바베큐 타임</div>
                <div className="text-xs pl-3 text-gray-400">
                  !! 날씨가 추울 예정이니 따뜻한 옷 필수
                </div>
                <div>3. 술 타임</div>
                <div>4. 선물교환식</div>
                <div>5. 게임</div>
                <div>6. 대부도 둘러보기</div>
                <div>7. 예쁜 카페 가기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
