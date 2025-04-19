"use client";
// src/components/Icon.jsx
import { twMerge } from "tailwind-merge";
import {
  Search,
  Star,
  ShoppingBag,
  UserRound,
  Menu,
  MoveUp,
  Plus,
  Minus,
} from "lucide-react";

// Define a map of available icons
const icons = {
  Search,
  Star,
  ShoppingBag,
  UserRound,
  Menu,
  MoveUp,
  Plus,
  Minus,
};

const Icon = ({ name, size = 18, className = "", color, ...props }) => {
  const IconComponent = icons[name];

  // Handle invalid icon names
  if (!IconComponent) {
    console.warn(
      `Icon "${name}" not found. Available icons: ${Object.keys(icons).join(
        ", ",
      )}`,
    );
    return null; // Or render a fallback icon
  }

  // Merge default classes with user-provided className
  const mergedClasses = twMerge(
    "transition-colors duration-300 ease-in-out", // Default classes
    className,
  );

  return (
    <IconComponent
      size={size}
      className={mergedClasses}
      color={color}
      {...props} // Pass additional props like onClick
    />
  );
};

export default Icon;
