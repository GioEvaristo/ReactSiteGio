import { useLottie } from "lottie-react";
import loading from '../../lottie/loading.json'
export default function Loading() {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options, { height: 600 });
  return View;
}
