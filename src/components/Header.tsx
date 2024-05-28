// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="  px-16">
      <div className="container mx-auto px-72">
         <figure>
        <Image src="/images/logo_vnbt.jpg" alt="logo"   width={238}
        height={80}/>
        <figcaption>Member of ATTA</figcaption>
      </figure>
       <nav className="flex space-x-4 ">
        <Link href="/home">Home</Link>
        <Link href="/vietnam">Vietnam</Link>
        <Link href="/cambodia">Cambodia</Link>
        <Link href="/thailand">Thailand</Link>
        <Link href="https://www.facebook.com/MyanmarBicycleTours">Myanmar</Link>
        <Link href="/multi-country">Multi-Country</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact-us">Contact us</Link>
      </nav>
      </div>
     
      
     
    </div>
  );
};

export default Header;
