import { useRef } from "react";
import { NeonButton } from "../components/NeonButton";
import { Box } from "./box";
import "./Information.css";

type Props = {
  onGoToApp: () => void;
};
export const Information = ({ onGoToApp }: Props) => {
  return (
    <>
      <div className="flex m-6  justify-around ">
        <div className=" p-4 m-4 max-w-lg">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <NeonButton onClick={onGoToApp}>Get started</NeonButton>
        </div>
        <div className=" p-4 m-4 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <NeonButton onClick={onGoToApp}>Get started</NeonButton>
        </div>
        <div className=" p-4 m-4 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <NeonButton onClick={onGoToApp}>Get started</NeonButton>
        </div>
      </div>
      <button onClick={onGoToApp} className="text-green">
        web3 app
      </button>
    </>
  );
};
