import Link from "next/link";
import React from "react";

const Council = () => {
  return (
    <section className="bg-no-repeat bg-mayor-hero bg-cover py-60">
      <h1 className="text-center capitalize text-3xl font-bold p-3">Council</h1>
      <article className=" flex flex-wrap justify-center items-center gap-4 py-12">
        <Link
          href={"council/speaker"}
          className="w-[300px] h-[150px] bg-yellow-300 flex justify-center items-center rounded-lg shadow-md hover:bg-yellow-200"
        >
          Office Of The Speaker
        </Link>
        <Link
          href={"council/chief-whip"}
          className="w-[300px] h-[150px] bg-blue-300 flex justify-center items-center rounded-lg shadow-md hover:bg-blue-200"
        >
          Office Of The Single Whip
        </Link>
        <Link
          href={"council/municipal-council"}
          className="w-[300px] h-[150px] bg-red-300 flex justify-center items-center rounded-lg shadow-md hover:bg-red-200"
        >
          Municipal Council
        </Link>
      </article>
    </section>
  );
};

export default Council;
