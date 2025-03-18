"use client";
import React, { useState, useRef } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import MobileNavigation from "./MobileNavigation";

const HeaderCloth = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(null);
  const submenuRefs = useRef({});

  const handleToggleSubmenu = (id) => {
    setShowMobileSubmenu((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <header className="absolute top-10 left-1/2 -translate-x-1/2 z-50 flex items-center px-[12px] w-full max-w-[1600px] font-josefin-sans">
        <DesktopHeader />
        <MobileHeader setShowMobileMenu={setShowMobileMenu} />
      </header>

      <MobileNavigation
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        showMobileSubmenu={showMobileSubmenu}
        handleToggleSubmenu={handleToggleSubmenu}
        submenuRefs={submenuRefs}
        setShowMobileSubmenu={setShowMobileSubmenu}
      />
    </>
  );
};

export default HeaderCloth;
