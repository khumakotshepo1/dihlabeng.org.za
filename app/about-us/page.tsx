import AboutData from "@app/components/AboutData";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold p-3 uppercase">About Us</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-3 justify-center items-center px-3 py-6">
        {AboutData.map((about) => (
          <Link
            key={about.title}
            href={about.link}
            className="flex bg-orange-300 w-4/5 md:w-96 rounded-lg flex-col justify-center items-center text-2xl p-3 text-gray-700 md:hover:text-gray-600"
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
