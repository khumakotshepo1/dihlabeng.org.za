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
      <ul className="p-3 bg-black h-screen fixed top-0 left-0 w-full justify-center items-center flex flex-col md:hidden z-50">
        <IoIosCloseCircle
          className="text-white text-5xl cursor-pointer absolute top-11 right-3"
          onClick={() => setOpenMenu(!openMenu)}
        />

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
      <IoIosMenu
        className="text-5xl cursor-pointer md:hidden text-gray-900"
        onClick={() => setOpenMenu(!openMenu)}
      />
      {menu}
    </>
  );
};

export default MobileNav;
