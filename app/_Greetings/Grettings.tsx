/* eslint-disable react/no-unescaped-entities */
import { FunctionComponent } from "react";
import * as helloLottie from "@/assets/lottie/hello.json";
import { Button } from "@/components/ui/Button/Button";
import { DocumentIcon } from "@heroicons/react/24/solid";
import SocialLinks from "@/components/shared/SocialLinks/SocialLinks";
import LottieContainer from "@/components/ui/LottieContainer/LottieContainer";

interface GreetingsProps {}

const Greetings: FunctionComponent<GreetingsProps> = () => {
  return (
    <div className="container mx-auto flex flex-row flex-wrap justify-center gap-3 pb-3 align-middle">
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
          className="roundedtext-sm w-max font-[600] tracking-wide text-black"
        >
          <DocumentIcon className="mr-3 h-[17px]" />
          SEE MY RESUME
        </Button>
      </div>
      <div className="lottie-width">
        <LottieContainer
          animationData={JSON.parse(JSON.stringify(helloLottie))}
          loop={true}
        ></LottieContainer>
      </div>
    </div>
  );
};

export default Greetings;
