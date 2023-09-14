import React from "react";
import ChiefWhip from "./ChiefWhip";

const OfficeOfTheChiefWhip = () => {
  return (
    <section>
      <article className="flex flex-col justify-center items-center h-[800px] p-6 bg-[url('../public/img/townhall.webp')] bg-no-repeat bg-cover relative bg-top ">
        <div className="text-white z-10 bg-black opacity-80 shadow-lg shadow-black">
          <h1 className="text-center capitalize text-3xl font-bold p-3">
            Office Of the Chief Whip
          </h1>
          <p className="text-center capitalize text-lg font-bold py-3 px-6 my-6">
            The Chief Whip of Council has a duty to ensure the effective
            political management of all councillors. Political management in
            this context supports sound, open, transparent, and accountable
            decision-making, which enables councillors to effectively discharge
            their duties as elected members of Council in their community
            service and representational roles.
          </p>
        </div>
      </article>
      <ChiefWhip />
    </section>
  );
};

export default OfficeOfTheChiefWhip;
