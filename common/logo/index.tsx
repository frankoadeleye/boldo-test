import Svgs from "assets/svgs";
import Image from "next/image";
import Link from "next/link";

const { LogoSvg } = Svgs;

type LogoProps = {
  width?: string;
  height?: string;
};

function Logo({ width = "162.22px", height = "42px" }: LogoProps) {
  return (
    <Link href="/">
      <Image
        width={width}
        height={height}
        layout="intrinsic"
        style={{ cursor: "pointer" }}
        src={LogoSvg}
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
