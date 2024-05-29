// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./../app/globals.css";
import ImgCountry from "./img-country/ImgCountry";

import { RiArrowRightSFill } from "react-icons/ri";


// tạo 1 hàm Header
const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const country = pathname ? pathname.replace("/", "").split("/") : [];

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      <div className="container mx-auto ">
        <Image src="/images/logo_vnbt.jpg" alt="Logo" width={238} height={80} />
        <div
          className="flex justify-between
        border-b-2 border-black w"
        ></div>

        <ImgCountry country={Array.isArray(country) ? country[0] : ""} />
        <nav className="flex space-x-4 text-custom-green">
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/home"
          ><div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Home</div>
           
          </Link>
          <Link
            className={`link ${pathname === "/vietnam" ? "active" : ""}`}
            href="/vietnam"
          ><div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Vietnam</div>
          </Link>
          <Link
            className={`link ${pathname === "/cambodia" ? "active" : ""}`}
            href="/cambodia"
          >
            <div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Cambodia</div>
          </Link>
          <Link
            className={`link ${pathname === "/thailand" ? "active" : ""}`}
            href="/thailand"
          >
            <div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Thailand</div>
          </Link>
          <Link
            className="link"
            href="https://www.facebook.com/MyanmarBicycleTours"
          >
           <div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Myanmar</div>
          </Link>
          <Link
            className={`link ${pathname === "/multi-country" ? "active" : ""}`}
            href="/multi-country"
          >
            <div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Multi-Country</div>
          </Link>
          <Link
            className={`link ${pathname === "/reviews" ? "active" : ""}`}
            href="/reviews"
          >
            <div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Reviews</div>
          </Link>
          <Link
            className={`link ${pathname === "/contact-us" ? "active" : ""}`}
            href="/contact-us"
          >
            <div className="flex items-center font-bold hover:font-normal text-sm"> <RiArrowRightSFill style={{ marginRight: '8px' }}/>
          Contact us</div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
