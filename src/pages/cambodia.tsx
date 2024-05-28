import React from "react";
import Image from "next/image";

const Cambodia = () => {
  return (
    <>
      <div>
        <div className="flex space-x-4 p-4 justify-center">
          <Image
            src="/images/Cambodia~~element141~~17.jpg"
            alt="Vietnam"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~16.jpg"
            alt="Cambodia"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~4.jpg"
            alt="Thailand"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~18.jpg"
            alt="Myanmar"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~15.jpg"
            alt="Multi-Country"
            width={150}
            height={150}
          />
        </div>
      </div>
      <h1>Cambodia Page</h1>
    </>
  );
};

export default Cambodia;
