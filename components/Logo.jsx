import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ color = "light" }) => {
  const logoSrc =
    color === "dark"
      ? "/images/logos/dark-logo.svg"
      : "/images/logos/light-logo.svg";

  return (
    <div>
      <Link href="/">
        <img
          src={logoSrc}
          alt="company logo"
          width={125}
          height={100}
          style={{
            width: "125px",
            height: "auto",
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
