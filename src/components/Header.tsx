// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container pl-80">
      <Image
        src="/images/logo_vnbt.jpg" // Path to your image
        alt="Logo"
        width={238}
        height={80}
      />
      <nav className="flex space-x-4 text-black">
        <Link href="/">Home</Link>
        <Link href="/vietnam">Vietnam</Link>
        <Link href="/cambodia">Cambodia</Link>
        <Link href="/thailand">Thailand</Link>
        <Link href="/myanmar">Myanmar</Link>
        <Link href="/multi-country">Multi-Country</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact-us">Contact us</Link>
      </nav>
    </div>
  );
};

export default Header;
