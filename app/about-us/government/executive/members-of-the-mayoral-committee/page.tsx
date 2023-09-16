import MmcData from "@app/components/MmcData";
import Mmcs from "./Mmcs";

const Mmc = () => {
  return (
    <section className="lg:w-4/5 xl:w-3/4 mx-auto">
      <article className="flex flex-col justify-center items-center h-[800px] p-6 bg-[url('../public/img/townhall.webp')] bg-no-repeat bg-cover relative bg-top">
        <span className="bg-teal-400 opacity-20 absolute h-full w-full"></span>
        <div className="text-white z-10 bg-black opacity-80 shadow-lg shadow-black">
          <h1 className="text-center text-3xl font-bold p-3 uppercase">
            Members of the Mayoral Committee
          </h1>
          <p className="text-lg font-bold py-3 px-6 my-6 text-gray-600">
            The members of the Mayoral committee are appointed by the Executive
            Mayor from among the members of the council. The Executive Deputy
            Mayor is elected by the Municipal Council and is an ex officio
            member of the Mayoral committee. The power to dismiss a member of
            the Mayoral committee also vests in the Executive Mayor. The Mayoral
            committee consists of the Executive Mayor, and eight (8) members.
          </p>
        </div>
      </article>

      <Mmcs />

      <article className="flex flex-col gap-4 justify-center items-center py-12 px-6 bg-gray-400 text-white my-4">
        {MmcData.map((mmc) => (
          <div key={mmc.title} className="w-full">
            <h2 className="text-xl font-bold text-teal-600">{mmc.title}</h2>
            <p>{mmc.desc}</p>
          </div>
        ))}
      </article>
      <article className="flex flex-col gap-2 justify-center items-center p-6 bg-gray-400 text-white my-4">
        <div className="w-full">
          <h2 className="text-xl font-bold text-teal-600">
            POWERS AND FUNCTIONS
          </h2>
          <p className="py-3">
            The Mayoral committee does not fall within the meaning of the
            definition of a political structure and the Municipal Council may
            therefore not delegate any powers or duties to it in terms of
            section 59 of the Systems Act.
          </p>
          <p className="py-3">
            The Mayoral Committee is also not a committee of the council and
            this means that its composition need not reflect the party political
            representation in council.
          </p>
          <p className="py-3">
            According to the Constitutional Court it is the Mayoral committee‘s
            primary task to assist the Executive Mayor in the exercise of
            his/her powers; it is in essence an extension of the Office of the
            Executive Mayor.
          </p>
          <p className="py-3">
            The Mayoral Committee has no power on its own; it is an instrument
            to assist the Executive Mayor, to offer him/her advice and to take
            decisions together with the Executive Mayor with regard to
            designated powers. Decisions are nevertheless that of the Executive
            Mayor.
          </p>
          <p>
            Individual members of the Mayoral committee may however be granted
            delegated powers. The Executive Mayor may:
          </p>
          <ul className="py-3">
            <li>
              {" "}
              Delegate specific responsibilities to each member of the committee
            </li>
            <li>
              Delegate any of the Executive Mayor’s powers to the respective
              members.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Mmc;
