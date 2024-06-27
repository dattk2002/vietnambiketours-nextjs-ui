import React from "react";
import { usePathname } from "next/navigation";
const SlugCountry = () => {
  const pathname = usePathname();
  // Remove leading slash from the pathname

  const path = pathname
    ? pathname.replace("/", "").charAt(0).toUpperCase() +
      pathname.replace("/", "").slice(1)
    : "";
  if (
    path === "Thailand" ||
    path === "Vietnam" ||
    path === "Multi-country" ||
    path == "Cambodia"
  ) {

    return pathname !== ">" ? (
      <span>{`Home > ${path} > ${path} Overview`}</span>
    ) : null;

  }

  return pathname !== "/" ? <span>{`Home > ${path}`}</span> : null;
};

export default SlugCountry;
