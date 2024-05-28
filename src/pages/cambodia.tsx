import Link from "next/link";
import React from "react";
import Image from "next/image";

const Cambodia = () => {
  return (
    <>
      <div className="flex space-x-4 p-4">
        <Link href="/cambodia/from-angkorwat">Biking from Angkor Wat</Link>
        <Link href="/cambodia/from-phnompenh">Biking from Phnom Penh</Link>
      </div>
    </>
  );
};

export default Cambodia;
