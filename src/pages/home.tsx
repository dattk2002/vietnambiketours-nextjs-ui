import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex  px-16 flex-col ">
        <nav className="flex-col flex">
          <Link href="/alone-traveler">Solo cyclist</Link>
          <Link href="group-bike-tours">Group-join</Link>
          <Link href="/tailor-make-quote">Customize your own</Link>
          <Link href="/travel-inquiry">Send an inquiry</Link>
          <Link href="/visa">Visa services</Link>
          <Link href="https://xedapvietnam.com.vn/" target="_blank">
            Bike shop & rent
          </Link>
        </nav>

        <div>
          <p>
            Vietnam Bike Tours are guided cycling experiences that take place in
            the beautiful country of Vietnam & Southeast Asia. These tours offer
            a unique and immersive way to explore the diverse landscapes, rich
            culture, and vibrant cities of Vietnam, Cambodia, Laos, Thailand,
            Myanmar & more, on two wheels.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
