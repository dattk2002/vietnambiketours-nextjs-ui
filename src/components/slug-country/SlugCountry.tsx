import React from "react";
import { usePathname } from "next/navigation";
const SlugCountry = () => {
  const pathname = usePathname();
  // Remove leading slash from the pathname
  const path = pathname ? pathname.replace("/", "") : "";
  return pathname !== "/" ? <span>{`Home > ${path}`}</span> : null;
};

export default SlugCountry;
