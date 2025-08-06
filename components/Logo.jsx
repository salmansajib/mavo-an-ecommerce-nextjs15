import React from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Logo = ({ color = "light", className }) => {
  const logoSrc =
    color === "dark"
      ? "/images/logos/dark-logo.svg"
      : "/images/logos/light-logo.svg";

  return (
    <div>
      <Link href="/">
        <Image
          src={logoSrc}
          alt="company logo"
          width={125}
          height={100}
          className={twMerge("w-[125px]", className)}
        />
      </Link>
    </div>
  );
};

export default Logo;
