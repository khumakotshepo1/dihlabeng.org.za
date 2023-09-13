import Link from "next/link";
import NavLinksData from "./NavLinksData";

const DesktopNav = () => {
  return (
    <ul className="md:flex sm:hidden flex px-3 py-1">
      {NavLinksData?.map((links) => (
        <li
          key={links.title}
          className="uppercase my-2 p-2 lg:text-sm md:text-xs hover:text-gray-400 hover:transition-all"
        >
          <Link href={links.link}>{links.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
