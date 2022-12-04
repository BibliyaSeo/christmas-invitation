import LottieView from "lottie-react";
import lottieJson from "../../assets/merry-christmas.json";

export default function PartyChristmas() {
  return (
    <>
      <LottieView animationData={lottieJson} autoPlay loop width={200} />
    </>
  );
}
