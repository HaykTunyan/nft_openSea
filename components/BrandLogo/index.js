import Image from "next/image";
import Link from "next/link";

function BrandLogo() {
  return (
    <Link href="/" className="">
      <Image
        src="/saynine-logo-mobile.svg"
        width={132}
        height={44}
        alt="SAYNIN-LOGO-LARG"
        className="cursor-pointer flex-shrink-0"
      />
    </Link>
  );
}

export default BrandLogo;
