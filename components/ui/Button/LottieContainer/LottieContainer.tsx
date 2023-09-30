"use client";
import Lottie, { LottieComponentProps } from "lottie-react";
import { FunctionComponent } from "react";

interface LottieContainerProps extends LottieComponentProps {
  animationData: any;
}

const LottieContainer: FunctionComponent<LottieContainerProps> = ({
  animationData,
  ...props
}) => {
  return <Lottie animationData={animationData} {...props}></Lottie>;
};

export default LottieContainer;
