"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Icon from "./Icon";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-[50px] right-[50px] bg-black text-white size-[46px] flex items-center justify-center p-[7px] !rounded-full shadow-lg border border-white z-50`}
      onClick={scrollToTop}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      whileHover={{
        scale: 1.2,
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{
        scale: 0.9,
        transition: { type: "spring", stiffness: 300 },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        duration: 0.3,
      }}
    >
      <Icon name="MoveUp" size={22} />
    </motion.button>
  );
};

export default BackToTop;
