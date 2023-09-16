import React from "react";
import mmcApi from "../../../../components/mmcApi";
import ExecsApi from "../../../../components/ExecsApi";
import Image from "next/image";
import Link from "next/link";

const Mmcs = () => {
  console.log(mmcApi);

  return (
    <section>
      <article className="px-3 p-6">
        <h1 className="font-bold text-3xl text-center p-6 border-b-teal-400 border-b-8 text-gray-600">
          Council Executive
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-12">
          {ExecsApi.map((exec: any) => (
            <Link
              href={exec.link}
              key={exec.name}
              className="flex flex-col justify-center items-center p-3 shadow-lg"
            >
              <div className="w-40 h-60 relative">
                <Image
                  src={exec.img}
                  alt={exec.name}
                  fill
                  className="absolute rounded-full"
                />
              </div>
              <h1 className="my-6 font-bold text-xl">{exec.name}</h1>
              <h2 className="text-teal-600 text-lg font-medium text-center">
                {exec.dept}
              </h2>
            </Link>
          ))}
        </div>
      </article>
      <article className="px-3 p-6">
        <h1 className="font-bold text-3xl text-center p-6 border-b-teal-400 border-b-8 text-gray-600">
          Portfolios Executive
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-12">
          {mmcApi.map((mmc: any) => (
            <div
              key={mmc.name}
              className="flex flex-col justify-center items-center p-3 shadow-lg"
            >
              <div className="w-40 h-60 relative">
                <Image
                  src={mmc.img}
                  alt={mmc.name}
                  fill
                  className="absolute rounded-full"
                />
              </div>
              <h1 className="my-6 font-bold text-xl">{mmc.name}</h1>
              <h2 className="text-teal-600 text-lg font-medium text-center">
                {mmc.dept}
              </h2>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Mmcs;
