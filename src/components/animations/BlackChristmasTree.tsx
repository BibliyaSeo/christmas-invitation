import React from "react";
import LottieView from "lottie-react";
import lottieJson from "../../assets/black-christmas-tree.json";

export default function BlackChristmasTree() {
  return (
    <>
      <LottieView animationData={lottieJson} autoPlay loop />
    </>
  );
}
