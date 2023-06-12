import MayorData from "@app/components/MayorData";
import Link from "next/link";

const MoreOfMayor = () => {
  return (
    <article className="bg-gray-100 shadow-lg my-12">
      <h1 className="text-center p-6 bg-blue-600 text-white font-bold text-2xl">
        More From the Mayor's Office
      </h1>
      <ul className="flex flex-wrap justify-center items-center py-6">
        {MayorData.map((mayor) => (
          <li
            key={mayor.title}
            className="bg-white text-blue-900 hover:bg-blue-900 font-semibold hover:text-white shadow-lg m-2 w-40 h-40 rounded-full flex justify-center items-center"
          >
            <Link href={mayor.link}>{mayor.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MoreOfMayor;
