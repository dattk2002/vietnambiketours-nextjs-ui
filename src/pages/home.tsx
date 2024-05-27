import Link from 'next/link';
import React from 'react';

const Home = () => {
  return  (
    <>
      <div className="flex space-x-4 p-4">
        <Link href="/alone-traveler">Solo cyclist</Link>
        <Link href="group-bike-tours">Group-join</Link>
        <Link href="/tailor-make-quote">Customize your own</Link>
        <Link href="/travel-inquiry">Send an inquiry</Link>
        <Link href="/visa">Visa services</Link>
        <Link href="https://xedapvietnam.com.vn/" target="_blank">Bike shop & rent</Link>
      </div>
    </>
  );
}

export default Home;