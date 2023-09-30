/* eslint-disable react/no-unescaped-entities */
import { FunctionComponent } from "react";
import * as loadingLottie from "@/assets/lottie/loading.json";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/Button/Button";
import { DocumentIcon } from "@heroicons/react/24/solid";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import LottieContainer from "@/components/ui/Button/LottieContainer/LottieContainer";

interface GreetingsProps {}

const Greetings: FunctionComponent<GreetingsProps> = () => {
  return (
    <div className="container mx-auto flex flex-row flex-wrap justify-center gap-3 align-middle ">
      <div className="my-auto flex w-[100%] flex-col gap-3 lg:w-[40%]">
        <p className="text-4xl font-semibold text-white">Hi all I'm Barak</p>
        <p className="text-xl/8 font-light text-white">
          I'm a passionate Full Stack web developer with experience in React,
          Next.js, Vite, Material-UI, React bootstrap, tailwind and more. In
          addition i have experience in Node.js and Python for my backend
          technologies stack
        </p>
        <SocialLinks />
        <Button
          variant="outline"
          className="w-max roundedtext-sm font-[600] tracking-wide text-black"
        >
          <DocumentIcon className="mr-3 h-[17px]" />
          SEE MY RESUME
        </Button>
      </div>
      <div className="w-[100%] lg:w-[40%]">
        <LottieContainer
          animationData={loadingLottie}
          loop={true}
        ></LottieContainer>
      </div>
    </div>
  );
};

export default Greetings;
