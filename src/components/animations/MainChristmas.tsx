import React from "react";
import LottieView from "lottie-react";
import lottieJson from "../../assets/christmas.json";

export default function MainChristmas() {
  return (
    <>
      <LottieView animationData={lottieJson} autoPlay loop />
    </>
  );
}
