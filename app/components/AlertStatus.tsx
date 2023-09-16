"use client";

import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

//   @ts-expect-error

const AlertStatus = ({ shedding, status }) => {
  const [openAlert, setOpenAlert] = useState(true);

  let myAlert;

  if (openAlert) {
    myAlert = (
      <div
        className={`w-full flex justify-center items-center px-3 ${
          status === 0 && "bg-green-600"
        } ${status === 1 && "bg-yellow-400"} ${
          status === 2 && "bg-yellow-400"
        } ${status === 3 && "bg-orange-400"} ${
          status === 4 && "bg-orange-600"
        } ${status === 5 && "bg-red-500"} ${status === 6 && "bg-red-600"} ${
          status === 7 && "bg-red-700"
        } ${status === 8 && "bg-red-800"}`}
      >
        {shedding === 0 ? (
          <p className="capitalize text-white">We currently not shedding</p>
        ) : (
          <p className="capitalize text-white">
            We currently on roaming Stage {shedding} Loadshedding!!
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full mx-auto flex flex-col justify-center items-end">
      {myAlert}
      <span
        className={`py-1 w-full rounded-b-none ${
          status === 0 && "bg-green-600"
        } ${status === 1 && "bg-yellow-400"} ${
          status === 2 && "bg-yellow-400"
        } ${status === 3 && "bg-orange-400"} ${
          status === 4 && "bg-orange-600"
        } ${status === 5 && "bg-red-500"} ${status === 6 && "bg-red-600"} ${
          status === 7 && "bg-red-700"
        } ${status === 8 && "bg-red-800"}`}
        onClick={() => setOpenAlert(!openAlert)}
      ></span>
      <button
        className={`tracking-widest pt-2 pb-2 px-3 w-full md:w-44 text-white md:rounded-b-lg flex justify-center items-center ${
          status === 0 && "bg-green-600"
        } ${status === 1 && "bg-yellow-400"} ${
          status === 2 && "bg-yellow-400"
        } ${status === 3 && "bg-orange-400"} ${
          status === 4 && "bg-orange-600"
        } ${status === 5 && "bg-red-500"} ${status === 6 && "bg-red-600"} ${
          status === 7 && "bg-red-700"
        } ${status === 8 && "bg-red-800"} `}
        onClick={() => setOpenAlert(!openAlert)}
      >
        {openAlert === true ? "Close Alert" : "Open Alert"}
        {openAlert === true ? (
          <IoIosArrowDropup className="animate-bounce ml-3" />
        ) : (
          <IoIosArrowDropdown className="animate-bounce ml-3" />
        )}
      </button>
    </div>
  );
};

export default AlertStatus;
