"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MoveUp } from "lucide-react";

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
      } fixed bottom-5 right-5 bg-black text-white size-[40px] flex items-start justify-center p-[3px] !rounded-full shadow-lg border border-white z-50`}
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
      <MoveUp size={20} />
    </motion.button>
  );
};

export default BackToTop;
