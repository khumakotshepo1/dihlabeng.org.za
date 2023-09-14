import ExecutiveData from "@app/components/ExecutiveData";
import Link from "next/link";

const Executive = () => {
  return (
    <section className="bg-no-repeat bg-mayor-hero bg-cover py-60">
      {/* <h1 className="text-center capitalize text-3xl font-bold p-3">
        Executive
      </h1> */}
      <article className="flex flex-col md:flex-row justify-center items-center gap-2 px-2 py-12">
        {ExecutiveData.map((executive) => (
          <Link
            key={executive.title}
            href={executive.link}
            className="flex justify-center items-center w-[300px] h-[200px] md:mt-20 md:hover:h-[220px] md:hover:w-[300px] hover:w-[320px] hover:transition-all bg-teal-400 odd:bg-blue-400 text-white font-bold shadow-lg shadow-blue-200"
          >
            {executive.title}
          </Link>
        ))}
      </article>
    </section>
  );
};

export default Executive;
