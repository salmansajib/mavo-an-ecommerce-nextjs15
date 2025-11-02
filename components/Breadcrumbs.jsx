"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const navVariants = {
  default: "!mb-4 flex items-center justify-center",
  compact: "!mb-2 flex items-center justify-center",
  spacious: "!mb-8 flex items-center justify-center",
  left: "!mb-4 flex items-center justify-start",
  right: "!mb-4 flex items-center justify-end",
};

const listVariants = {
  default: "flex items-center !space-x-2 !text-sm",
  large: "flex items-center !space-x-3 !text-base",
  small: "flex items-center !space-x-1 !text-xs",
  tight: "flex items-center !space-x-1 !text-sm",
};

const homeVariants = {
  default: "!text-blue-600 hover:!underline",
  light: "!text-gray-50 hover:!text-gray-100 hover:!underline",
  dark: "!text-gray-900 hover:!text-gray-700 hover:!underline",
  primary: "!text-blue-600 hover:!text-blue-800 hover:!underline",
  secondary: "!text-purple-600 hover:!text-purple-800 hover:!underline",
  accent: "!text-green-600 hover:!text-green-800 hover:!underline",
};

const linkVariants = {
  default: "!text-blue-600 hover:!underline",
  light: "!text-gray-50 hover:!text-gray-100 hover:!underline",
  dark: "!text-gray-900 hover:!text-gray-700 hover:!underline",
  primary: "!text-blue-600 hover:!text-blue-800 hover:!underline",
  secondary: "!text-purple-600 hover:!text-purple-800 hover:!underline",
  accent: "!text-green-600 hover:!text-green-800 hover:!underline",
  muted: "!text-gray-500 hover:!text-gray-700 hover:!underline",
};

const separatorVariants = {
  default: "!mx-2",
  wide: "!mx-4",
  narrow: "!mx-1",
  light: "!mx-2 !text-gray-300",
  dark: "!mx-2 !text-gray-700",
};

const currentVariants = {
  default: "!text-gray-600",
  light: "!text-gray-50",
  dark: "!text-gray-900 !font-medium",
  bold: "!text-gray-900 !font-bold",
  muted: "!text-gray-500",
  emphasized: "!text-gray-800 !font-semibold",
};

export default function Breadcrumbs({
  className,
  navVariant = "default",
  listVariant = "default",
  homeVariant = "default",
  linkVariant = "default",
  separatorVariant = "default",
  currentVariant = "default",
  // Keep className props for additional customization
  navClassName,
  listClassName,
  homeClassName,
  linkClassName,
  separatorClassName,
  currentClassName,
}) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);

    return {
      label: label.replace(/-/g, " "),
      href,
      isLast: index === segments.length - 1,
    };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(navVariants[navVariant], navClassName, className)}
    >
      <ol className={cn(listVariants[listVariant], listClassName)}>
        <li>
          <Link
            href="/"
            className={cn(homeVariants[homeVariant], homeClassName)}
          >
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center">
            <span
              className={cn(
                separatorVariants[separatorVariant],
                separatorClassName,
              )}
            >
              /
            </span>
            {crumb.isLast ? (
              <span
                className={cn(
                  currentVariants[currentVariant],
                  currentClassName,
                )}
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className={cn(linkVariants[linkVariant], linkClassName)}
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
