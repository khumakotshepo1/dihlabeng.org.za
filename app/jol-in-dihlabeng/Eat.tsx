import EatApi from "@app/components/EatApi";
import Image from "next/image";
import Link from "next/link";

const Eat = () => {
  return (
    <article className="flex gap-10 justify-start items-center w-full px-3 py-6">
      {/* <div className="bg-gray-300 h-60 w-60 rounded-full flex justify-center items-center">
        <h1 className="text-green-600 font-Caveat-brush text-3xl font-bold">
          Where To Eat
        </h1>
      </div>
      <div className="flex justify-center items-center">
        {EatApi.map((eat) => (
          <Link
            href={eat.link}
            target={eat.target}
            className="flex flex-col justify-center items-center gap-2 mx-8"
          >
            <div className="h-40 w-40 relative">
              <Image
                src={eat.img}
                alt={eat.name}
                fill
                className="absolute rounded-full"
              />
            </div>
            <h1 className="text-lg font-semibold">{eat.name}</h1>
          </Link>
        ))}
      </div> */}
    </article>
  );
};

export default Eat;
