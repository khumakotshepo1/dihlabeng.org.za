import Image from "next/image";

import { IoIosCall, IoIosMail } from "react-icons/io";

const HomeHero = () => {
  return (
    <div className="min-h-[70vh] w-full bg-dlm_hq-hero bg-no-repeat bg-cover flex justify-center items-center relative">
      <div className="absolute h-full w-full bg-orange-400 opacity-50"></div>
      <div className="bg-black opacity-90 text-white p-6 text-center">
        <h1 className="text-6xl font-bold tracking-wider my-4">
          Welcome to our Local Municipality.
        </h1>
        <p className="text-2xl font-semibold text-gray-200 my-4">
          Explore opportunities and scrutinize our service level agreement
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
