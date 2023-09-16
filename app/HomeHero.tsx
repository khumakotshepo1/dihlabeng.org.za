import { IoIosCall, IoIosMail } from "react-icons/io";

const HomeHero = () => {
  return (
    <div className="w-full bg-dlm_hq-hero bg-no-repeat bg-cover flex justify-center items-center relative px-6 py-96">
      <article className="absolute top-6 right-3">
        <div className=" text-white bg-black opacity-60 p-1 font-bold xl:text-xl rounded-2xl flex gap-6">
          <a href="tel:+27-58-303-5732">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <span className="border-2 rounded-full border-white p-0.5 xl:p-2 ">
                <IoIosCall />
              </span>
              <p className="sm:hidden xl:block"> +27 58 303 5732</p>
            </div>
          </a>

          <a href="mailto:khumakotshepo1@gmail.com">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <span className="border-2 rounded-full border-white p-0.5 xl:p-2">
                <IoIosMail />
              </span>
              <p className="sm:hidden xl:block">admin@dihlabeng.org.za</p>
            </div>
          </a>
        </div>
      </article>
      <div className="bg-black opacity-90 text-white p-6 text-center">
        <h1 className="text-2xl xl:text-6xl font-bold tracking-wider my-4">
          Welcome to our Local Municipality.
        </h1>
        <p className="text-lg xl:text-2xl font-semibold text-gray-200 my-4">
          Explore opportunities and scrutinize our service level agreement
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
