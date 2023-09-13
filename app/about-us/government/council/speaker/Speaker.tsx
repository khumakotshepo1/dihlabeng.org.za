import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import Nthabeleng from "../../../../../public/img/council/Council-Speaker-Cllr-Nthabeleng-Mofokeng.webp";

const Speaker = () => {
  return (
    <article className="bg-gray-100 w-full xl:w-3/4 mx-auto h-full flex flex-col justify-center shadow-md py-6 md:p-6 items-center lg:flex-row my-12">
      <Image
        src={Nthabeleng}
        alt="Council Speaker. Nthabeleng Mofokeng"
        width={700}
        height={1200}
        className="w-4/5 h-[5=400px] md:h-[500px] xl:h-[600px] md:px-3 md:w-[450px] lg:w-1/2 xl:w-1/3"
      />

      <div className="w-full h-full p-12">
        <h1 className="text-gray-700 text-5xl lg:text-start text-center p-2 font-bold">
          Cllr Nthabeleng Mofokeng
        </h1>
        <h2 className="text-black text-2xl text-center p-2 font-bold lg:text-start">
          Council Speaker
        </h2>
        <p className="p-3 my-3 text-gray-800 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          voluptatem, illum explicabo perferendis neque quas necessitatibus
          officia minima fugit dolores cupiditate? Ab nobis iusto temporibus
          dolor unde, quasi, dicta maxime cupiditate magnam eveniet quaerat,
          voluptatem vitae tempora ad corporis quod exercitationem esse
          voluptatum excepturi amet atque velit consequuntur? Voluptatem sint
          assumenda praesentium labore quos necessitatibus nobis delectus enim
          sequi aut commodi non, tempora optio quod, error atque eveniet ut.
          Corrupti recusandae, temporibus ducimus quae repudiandae accusamus
          sed! Quaerat, reiciendis maxime!
        </p>
        <h3 className="flex justify-center lg:justify-start items-center p-2 text-lg">
          <IoIosMail className="mx-3" />
          patospeaker@dihlabeng.org.za
        </h3>
        <h3 className="flex justify-center lg:justify-start items-center p-2 text-lg">
          <IoIosCall className="mx-3" />
          058 303 5732
        </h3>

        <ul className="flex justify-center items-center text-xl px-6 py-12 gap-4 lg:justify-start">
          <li>
            <Link href="#">
              <FaFacebook className="hover:text-gray-800" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTwitter className="hover:text-gray-800" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaLinkedin className="hover:text-gray-800" />
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Speaker;
