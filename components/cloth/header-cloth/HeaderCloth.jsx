"use client";
import React, { useState, useRef } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import MobileNavigation from "./MobileNavigation";
import SearchModal from "./SearchModal";

const HeaderCloth = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(null);
  const submenuRefs = useRef({});
  const [isSearchFormActive, setIsSearchFormActive] = useState(false); // State to control search form visibility

  const toggleSearchForm = () => {
    setIsSearchFormActive((prev) => !prev); // Toggle search form visibility
  };

  const handleToggleSubmenu = (id) => {
    setShowMobileSubmenu((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <header className="absolute  px-[12px] top-0 left-1/2 -translate-x-1/2 z-50 flex items-center w-full h-[120px] max-w-[1600px] font-josefin-sans">
        <DesktopHeader setIsSearchFormActive={setIsSearchFormActive} />
        <MobileHeader
          setShowMobileMenu={setShowMobileMenu}
          setIsSearchFormActive={setIsSearchFormActive}
        />
      </header>

      <MobileNavigation
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        showMobileSubmenu={showMobileSubmenu}
        handleToggleSubmenu={handleToggleSubmenu}
        submenuRefs={submenuRefs}
        setShowMobileSubmenu={setShowMobileSubmenu}
      />

      <SearchModal
        isSearchFormActive={isSearchFormActive}
        onClose={toggleSearchForm}
      />
    </>
  );
};

export default HeaderCloth;
