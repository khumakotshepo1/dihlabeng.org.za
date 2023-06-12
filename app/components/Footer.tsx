import Link from "next/link";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600">
      <ul className="flex justify-center items-center text-2xl p-3 gap-4">
        <li>
          <Link
            href="https://www.facebook.com/dihlabeng?_rdc=1&_rdr"
            target="_blank"
          >
            <FaFacebook className="hover:text-gray-800" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaTwitter className="hover:text-gray-800" />
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
      </ul>
      <p className="text-center p-3 text-gray-900">
        &copy; 2023 Dihlabeng Local Municipality
      </p>
    </footer>
  );
};

export default Footer;
