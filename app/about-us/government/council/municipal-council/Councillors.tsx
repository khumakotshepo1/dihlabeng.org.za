import CouncillorsData from "@app/components/CouncillorsData";
import Image from "next/image";

const Councillors = () => {
  return (
    <article className="flex flex-wrap gap-4 justify-center items-center my-12 px-3 py-6">
      {CouncillorsData.map((councillor) => (
        <figure
          key={councillor.ward}
          className="p-3 flex flex-col justify-center items-center"
        >
          <h2 className="text-xl uppercase px-3 py-6 text-blue-400 font-bold">
            {councillor.ward}
          </h2>
          <span className="flex justify-center items-center relative h-60 w-60">
            <Image
              className="absolute rounded-full px-6 py-1"
              src={councillor.img}
              alt={councillor.name}
              fill
            />
          </span>

          <h3 className="text-lg text-blue-900">{councillor.name}</h3>
          <figcaption className="text-sm text-gray-400 uppercase">
            {councillor.party}
          </figcaption>
        </figure>
      ))}
    </article>
  );
};

export default Councillors;
