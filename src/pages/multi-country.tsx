import SlugCountry from "@/components/slug-country/SlugCountry";
import Link from "next/link";
import React from "react";

const MultiCountry = () => {
  return (
    <>
      <div className="flex-col grid gap-4 sm:grid-cols-12 pt-5">
        <nav className="flex-col flex col-span-3 text-[13px]">
          <Link className="pb-2" href="/alone-traveler">
            Cycling from Vietnam
          </Link>
          <Link className="pb-2" href="group-bike-tours">
            Cycling from Cambodia
          </Link>
          <Link className="pb-2" href="/tailor-make-quote">
            Cycling from Thailand
          </Link>
          <Link className="pb-2" href="/travel-inquiry">
            Cycling Myanmar
          </Link>
        </nav>

        <div className="col-span-9">
          <p className="text-[13px] pb-3">
            <SlugCountry></SlugCountry>
          </p>
          <p className="text-[13px] ">MULTI-COUNTRY IN ONE TRIP BY BIKE</p>
          <p className="text-[13px] pb-3">
            The countries of Southeast Asia are greatly diverse. With improved
            travel links, multi-country cycling is a popular way to explore the
            ancient and modern wonders of the region. On our multi-country
            tours, you’ll explore historic temples, relax on spectacular
            beaches, experience buzzing cities, and cycle among the best biking
            tour guides deep into the SE Asian countryside.
          </p>
          <p className="text-[13px] ">
            We genuinely believe that cycling through a region for the first
            time with a group of like-minded people is the best way to
            experience Asia. Our aim is to provide you with the opportunity to
            meet new people, learn about new cultures, experience different
            landscapes and, most importantly, to have some fun.
          </p>

          <p className="text-[13px]">
            Cycling is a major part of our trips – they are cycle tours after
            all. All of our tours accommodate the preferences of the
            participating cyclists. Different trips will require varying degrees
            of physical ability. Specific details on terrain, cycling
            conditions, distances covered each day and altitude will be
            discussed prior to your biking adventure.
          </p>
          <p className="text-[13px] pb-3">
            Vietnam s number of visitors for tourism and vacation has increased
            steadily over the past ten years. About 5 million international
            guests visited Vietnam last year. The government and private
            enterprises are investing capital into the coastal regions that are
            already popular for their beaches and boat tours. Besides those
            regular tours, Vietnam is perhaps one of the best countries for
            cycling vacations. It gives travelers more chances to see the
            countryside and experience local life, compared with other methods
            of travel. Popular destinations include: Hanoi, Saigon, Phong Nha,
            Hue (the old imperial capital), World Heritage Sites like Hoi An and
            the Cham temples of Mỹ Sơn, the coastal city of Nha Trang, the caves
            of Ha Long Bay, the Marble Mountains, and the Mekong Delta.
          </p>
        </div>
      </div>
    </>
  );
};

export default MultiCountry;
