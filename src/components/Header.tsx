// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import ImgCoutry from "@/components/img-country/ImgCoutry";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./../app/globals.css";
// tạo 1 hàm Header
const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const country = pathname ? pathname.replace("/", "").split("/") : []; 
  
  console.log(">>rest", pathname);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null; 
  }
  console.log(">>pathname", pathname === "/vietnam");
  return (
    <div className="">
      <div className="container mx-auto ">
      <Image
        src="/images/logo_vnbt.jpg" 
        alt="Logo"
        width={238}
        height={80}
      />
      <div
        className="flex justify-between
        border-b-2 border-black w"
      ></div>
      <ImgCoutry country={Array.isArray(country) ? country[0] : ""} />
      <nav className="flex space-x-4 text-black">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/home">
          Home
        </Link>
        <Link
          className={`link ${pathname === "/vietnam" ? "active" : ""}`}
          href="/vietnam"
        >
          Vietnam
        </Link>
        <Link
          className={`link ${pathname === "/cambodia" ? "active" : ""}`}
          href="/cambodia"
        >
          Cambodia
        </Link>
        <Link
          className={`link ${pathname === "/thailand" ? "active" : ""}`}
          href="/thailand"
        >
          Thailand
        </Link>
        <Link
          className="link"
          href="https://www.facebook.com/MyanmarBicycleTours"
        >
          Myanmar
        </Link>
        <Link
          className={`link ${pathname === "/multi-country" ? "active" : ""}`}
          href="/multi-country"
        >
          Multi-Country
        </Link>
        <Link
          className={`link ${pathname === "/reviews" ? "active" : ""}`}
          href="/reviews"
        >
          Reviews
        </Link>
        <Link
          className={`link ${pathname === "/contact-us" ? "active" : ""}`}
          href="/contact-us"
        >
          Contact us
        </Link>
      </nav>
      </div>
      
      </div>

  );
};

export default Header;
