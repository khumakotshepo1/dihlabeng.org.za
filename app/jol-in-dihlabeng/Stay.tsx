import StayApi from "@app/components/StayApi";
import Image from "next/image";
import Link from "next/link";

const Stay = () => {
  return (
    <article className="flex gap-10 justify-start items-center w-full px-3 py-6">
      <div className="bg-gray-300 h-60 w-60 rounded-full flex justify-center items-center">
        <h1 className="text-green-600 font-Caveat-brush text-3xl font-bold">
          Where To Stay
        </h1>
      </div>
      <div className="flex justify-center items-center">
        {StayApi.map((stay) => (
          <Link
            href={stay.link}
            target={stay.target}
            className="flex flex-col justify-center items-center gap-2 mx-4"
          >
            <div className="h-36 w-36 relative">
              <Image
                src={stay.img}
                alt={stay.name}
                fill
                className="absolute rounded-full"
              />
            </div>
            <h1 className="text-lg font-semibold">{stay.name}</h1>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Stay;
