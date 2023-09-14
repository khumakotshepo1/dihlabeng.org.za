import Mayor from "./Mayor";
import MoreOfMayor from "./MoreOfMayor";

const OfficeOfTheMayor = () => {
  return (
    <section>
      <article className="flex flex-col justify-center items-center h-[800px] p-6 bg-[url('../public/img/townhall.webp')] bg-no-repeat bg-cover relative bg-top">
        <span className="bg-blue-400 opacity-20 absolute h-full w-full"></span>
        <div className="text-white z-10 bg-black opacity-80 shadow-lg shadow-black">
          <h1 className="text-center capitalize text-3xl font-bold p-3">
            Office of the mayor
          </h1>
          <p className="text-center capitalize text-lg font-bold py-3 px-6 my-6">
            The Council comprises an elected Mayor, Councillors, executive
            committee and several implementation committees. The Dihlabeng Mayor
            is Councillor Tseki Tseki.
          </p>
        </div>
      </article>
      <Mayor />
      <MoreOfMayor />
    </section>
  );
};

export default OfficeOfTheMayor;
