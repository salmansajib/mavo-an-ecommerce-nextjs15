"use client";
import React, { useState, useRef } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import MobileNavigation from "./MobileNavigation";
import SearchModal from "./SearchModal";

const Header = () => {
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
      <header className="absolute px-[12px] top-[20px] left-1/2 -translate-x-1/2 z-50 flex items-center w-full h-[80px] max-w-[1630px] font-josefin-sans border-b border-b-[#e0c084]">
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

export default Header;
