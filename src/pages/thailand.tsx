import SlugCountry from "@/components/slug-country/SlugCountry";
import Link from "next/link";
import React from "react";

const Thailand = () => {
  return (
    <>
      <div className="px-16 flex-col grid gap-4 sm:grid-cols-12 pt-5">
        <nav className="flex-col flex col-span-3 text-[13px]">
          <Link className="pb-2" href="/alone-traveler">
            Biking from Bangkok
          </Link>
        </nav>
        <div className="col-span-9">
          <p className="text-[13px] pb-3">
            <SlugCountry />
          </p>
          <p className="text-[13px] pb-3">THAILAND OVERVIEW</p>
          <p className="text-[13px] pb-3">
            The Kingdom of Thailand is an independent country that lies in the
            heart of Southeast Asia. It is bordered to the north by Laos and
            Myanmar, to the east by Laos and Cambodia, to the south by the Gulf
            of Thailand and Malaysia, and to the west by the Andaman Sea and
            Myanmar.
          </p>
          <p className="text-[13px] pb-3 ">
            The capital and largest city of Thailand is Bangkok. It is also the
            countrys center of political, commercial, industrial and cultural
            activities. In Thai, the city is referred to as Krung Thep, meaning.
          </p>
          <p className="text-[13px] pb-3 ">
            Thailand is the worlds 51st-largest country in terms of total area,
            roughly equal in size to Spain, with a surface area of approximately
            513,000 km2 (198,000 sq mi), and the 20th most-populous country,
            with approximately 63 million people. About 75% of the population is
            ethnically Thais, 14% are of Chinese origin, and 3% is ethnically
            Malay, the rest belong to minority groups including Mons, Khmers,
            and various hill tribes. The countrys official language is Thai.
          </p>
          <p className="text-[13px] pb-3 ">
            Thailand is a constitutional monarchy with King Bhumibol Adulyadej,
            the ninth king of the House of Chakri, as the ruling monarch. The
            King has reigned for more than half a century, making him the
            longest reigning Thai monarch and the longest reigning current
            monarch in the world. The King is recognized as the Head of State,
            the Head of the Armed Forces, the Upholder of the Buddhist religion,
            and the Defender of the Faith.
          </p>
          <p className="text-[13px] pb-3 ">
            Thailand is the only country in Southeast Asia that has never been
            ruled by a European power. However, during the Second World War, and
            while claiming neutrality, Thailand was occupied by the armed forces
            of the Empire of Japan who built the infamous Death Railway.
          </p>
          <p className="text-[13px] pb-3 ">
            Thailand Overview History of Thailand
          </p>
          <div>
            {/* nhúng video  */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/427bpKfoq2Q?si=lCoZL7BNS5sxlAeW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Thailand;
