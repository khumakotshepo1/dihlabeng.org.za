"use client";

import Link from "next/link";
import NavLinksData from "./NavLinksData";

import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import { useState } from "react";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  let menu;

  if (openMenu === true) {
    menu = (
      <ul className="p-3 bg-black h-screen fixed top-0 left-0 w-full justify-center items-center flex flex-col z-40 md:hidden">
        {/* <IoIosCloseCircle
          className="text-white text-5xl cursor-pointer absolute top-11 right-3"
          onClick={() => setOpenMenu(!openMenu)}
        /> */}

        {NavLinksData?.map((links) => (
          <li key={links.title} className="text-white uppercase my-2 w-1/2 p-2">
            <Link onClick={() => setOpenMenu(false)} href={links.link}>
              {links.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div
        className="flex flex-col gap-1 cursor-pointer z-50 md:hidden relative"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div
          className={`${openMenu === true ? "bg-white" : "bg-black"} w-12 h-1`}
        ></div>
        <div
          className={`${openMenu === true ? "bg-white" : "bg-black"} w-10 h-1`}
        ></div>
        <div
          className={`${openMenu === true ? "bg-white" : "bg-black"} w-8 h-1`}
        ></div>
      </div>
      {menu}
    </>
  );
};

export default MobileNav;
