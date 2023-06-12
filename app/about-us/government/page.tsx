import GovernmentData from "@app/components/GovernmentData";
import Link from "next/link";

const Government = () => {
  return (
    <section>
      <h1 className="text-center capitalize text-3xl font-bold p-3">
        Government
      </h1>
      <article className="flex flex-col md:flex-row justify-center items-center gap-2 px-2 py-12">
        {GovernmentData.map((government) => (
          <Link
            href={government.link}
            className="flex justify-center items-center w-[300px] h-[200px] md:mt-20 md:hover:h-[220px] md:hover:w-[300px] hover:w-[320px] hover:transition-all bg-blue-400 text-white font-bold shadow-lg shadow-blue-200"
          >
            {government.title}
          </Link>
        ))}
      </article>
    </section>
  );
};

export default Government;
