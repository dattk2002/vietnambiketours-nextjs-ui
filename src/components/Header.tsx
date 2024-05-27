// components/Header.tsx
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
<div className="flex-grow container mx-auto p-8 pt-0">
      <Image
        src="/images/logo_vnbt.jpg" // Path to your image
        alt="Logo"
        width={238} 
        height={80} 
      />
    </div>
  );
}

export default Header;
