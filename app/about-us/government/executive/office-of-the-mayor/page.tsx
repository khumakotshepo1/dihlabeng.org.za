import Mayor from "./Mayor";
import MoreOfMayor from "./MoreOfMayor";

const OfficeOfTheMayor = () => {
  return (
    <section className="py-12 px-3">
      <article className="flex flex-col justify-center items-center h-96">
        <h1 className="text-center capitalize text-3xl font-bold p-3">
          Office of the mayor
        </h1>
        <p className="text-center capitalize text-xl font-bold py-3 px-6 my-6">
          The Council comprises an elected Mayor, Councillors, executive
          committee and several implementation committees. The Dihlabeng Mayor
          is Councillor Tseki Tseki.
        </p>
      </article>
      <Mayor />
      <MoreOfMayor />
    </section>
  );
};

export default OfficeOfTheMayor;
