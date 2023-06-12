import brand from "@public/img/logo-1.webp";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={brand} alt="Company Logo" width={120} height={120} />
    </Link>
  );
};

export default Logo;
