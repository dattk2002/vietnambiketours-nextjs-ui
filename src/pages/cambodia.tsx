import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlugCountry from "@/components/slug-country/SlugCountry";
import FacebookFrame from "@/components/FacebookFrame";

const Cambodia = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:pt-5">
        <nav className="sm:col-span-3 text-[13px]">
          <div className="pb-2">
            <Link className="pb-2" href="/alone-traveler">
              Biking from Angkor Wat
            </Link>
          </div>
          <div className="pb-2">
            <Link className="pb-2" href="group-bike-tours">
              Biking from Phnom Penh
            </Link>
          </div>
        </nav>

        <div className="col-span-1 sm:col-span-9 text-[13px]">
          <p className="text-[13px] pb-3">
            <SlugCountry />
          </p>
          <p className="text-[13px] pb-3">CAMBODIA OVERVIEW</p>
          <p className="text-[13px] pb-3">
            The Kingdom of Cambodia is a country in South East Asia with a
            population of over 14 million people. The capital and largest city
            is Phnom Penh. Cambodia is the successor state of the once powerful
            Hindu and Buddhist Khmer Empire, which ruled most of the Indochinese
            Peninsula between the eleventh and fourteenth centuries.
          </p>
          <p className="text-[13px] pb-3 ">
            A citizen of Cambodia is usually identified as though the latter
            strictly refers to ethnic Khmers. Most Cambodians are Theravada
            Buddhists of Khmer extraction, but the country also has a
            substantial number of predominantly Muslim Cham, as well as ethnic
            Chinese, Vietnamese and small animist hill tribes.
          </p>
          <p className="text-[13px] pb-3 ">
            The country borders Thailand to its west and northwest, Laos to its
            northeast, and Vietnam to its east and southeast. In the south it
            faces the Gulf of Thailand. The geography of Cambodia is dominated
            by the Mekong river and the Tonlé Sap lake, an important source of
            fish.
          </p>
          <p className="text-[13px] pb-3 ">
            Agriculture has long been the most important sector of the Cambodian
            economy, with around 59% of the population relying on agriculture
            for their livelihood (with rice the principal crop). Garments,
            tourism, and construction are also important.
          </p>
          <p className="text-[13px] pb-3 ">Cycling video:</p>
          <div>
            {/* nhúng video  */}
            <iframe
              src="https://www.youtube.com/embed/427bpKfoq2Q?si=lCoZL7BNS5sxlAeW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-[315px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambodia;
