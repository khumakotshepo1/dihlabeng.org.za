import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaMailchimp,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-gray-600 flex flex-col gap-3 justify-center items-center pt-16">
      <ul className="flex justify-center items-center text-2xl p-3 gap-4 ">
        <li>
          <Link
            href="https://www.facebook.com/dihlabeng?_rdc=1&_rdr"
            target="_blank"
          >
            <FaFacebook className="hover:text-gray-800" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/dihlabengm?lang=en" target="_blank">
            <FaXTwitter className="hover:text-gray-800" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@dihlabenglocalmunicipality8968"
            target="_blank"
          >
            <FaYoutube className="hover:text-gray-800" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/dihlabeng_local_municipality/"
            target="_blank"
          >
            <FaInstagram className="hover:text-gray-800" />
          </Link>
        </li>
      </ul>
      <article className="flex gap-3 justify-center items-center">
        <div className="flex gap-3 justify-center items-center">
          <FaLocationDot />
          <p> 9 Muller Street, Bethlehem, 9700</p>
        </div>
        <div className="bg-gray-600 w-0.5 h-5"></div>
        <div className="flex gap-3 justify-center items-center">
          <FaMailchimp />
          <p>PO Box 551, Bethlehem, 9700</p>
        </div>
      </article>
      <p className="text-center p-3 text-gray-900">
        &copy; 2023 Dihlabeng Local Municipality
      </p>
    </footer>
  );
};

export default Footer;
