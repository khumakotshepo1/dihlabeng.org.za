import TownsApi from "@app/components/TownsApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Neighbourhoods = () => {
  return (
    <article className="flex flex-col xl:flex-row gap-10 justify-start items-center w-full px-3 py-6 bg-gray-100">
      <div className="bg-white h-60 w-60 rounded-full flex flex-col justify-center items-center">
        <p className="font-semibold text-base">Dihlabeng</p>
        <h1 className="text-green-600 font-Caveat-brush text-3xl font-bold">
          Neighbourhoods
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:flex justify-center items-center">
        {TownsApi.map((town) => (
          <Link
            href={town.link}
            target={town.target}
            className="flex flex-col justify-center items-center gap-2 mx-4"
          >
            <div className="h-36 w-36 relative">
              <Image
                src={town.img}
                alt={town.name}
                fill
                className="absolute rounded-full"
              />
            </div>
            <h1 className="text-lg font-semibold">{town.name}</h1>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Neighbourhoods;
