import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ color = "light", width = 125, height = 100 }) => {
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
          width={width}
          height={height}
          style={{
            width: `${width}px`,
            height: "auto",
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
