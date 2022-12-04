import LottieView from "lottie-react";
import lottieJson from "../../assets/merry-christmas-greeting-animation.json";

export default function PlaceChristmas() {
  return <LottieView animationData={lottieJson} autoPlay loop />;
}
