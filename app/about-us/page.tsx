import AboutData from "@app/components/AboutData";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-no-repeat bg-mayor-hero bg-cover py-60">
      {/* <h1 className="text-center text-3xl font-bold py-10 uppercase bg-white opacity-90">
        About Us
      </h1> */}
      <div className="gap-3 justify-center items-center px-3 py-6 grid lg:grid-cols-2 grid-cols-1 lg:w-fit mx-auto">
        {AboutData.map((about) => (
          <Link
            key={about.title}
            href={about.link}
            target={about.act}
            className="flex bg-blue-300 lg:h-52 h-40 w-4/5 md:w-96 flex-col justify-center items-center text-2xl p-3 md:hover:text-slate-700 text-white  mx-auto shadow-lg shadow-blue-200"
          >
            {about.img}
            {about.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
