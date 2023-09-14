import Speaker from "./Speaker";

const OfficeOfTheSpeaker = () => {
  return (
    <section>
      <article className="flex flex-col justify-center items-center h-[800px] p-6 bg-[url('../public/img/townhall.webp')] bg-no-repeat bg-cover relative bg-top ">
        <div className="text-white z-10 bg-black opacity-80 shadow-lg shadow-black">
          <h1 className="text-center capitalize text-3xl font-bold p-3">
            Office Of The Speaker
          </h1>
          <p className="text-center capitalize text-lg font-bold py-3 px-6 my-6">
            The Speaker of Council is the custodian of all policies and Council
            resolutions. It is also the political head of the legislative arm of
            Council and presides at Council meetings to ensure compliance with
            the Councillor’s Code of Conduct and the Rules and Orders.
          </p>
        </div>
      </article>
      <Speaker />
    </section>
  );
};

export default OfficeOfTheSpeaker;
