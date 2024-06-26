import SlugCountry from "@/components/slug-country/SlugCountry";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import GroupBikeTours from "./group-bike-tours";
import TailorMakeQuote from "./tailor-make-quote";
import TravelInquiry from "./travel-inquiry";
import Visa from "./visa";

const AloneTraveler = () => {
  const router = useRouter();
  const { pathname } = router;

  const renderContent = () => {
    switch (pathname) {
      case "group-bike-tours":
        return <GroupBikeTours />;
      case "tailor-make-quote":
        return <TailorMakeQuote />;
      case "travel-inquiry":
        return <TravelInquiry />;
      case "visa":
        return <Visa />;
      default:
        return <SlugCountry />;
    }
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:pt-5">
      <nav className="sm:col-span-3 text-[13px]">
        <div className="pb-2">
          <button onClick={() => navigateTo("alone-traveler")}>
            Solo cyclist
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("group-bike-tours")}>
            Group-join
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("tailor-make-quote")}>
            Customize your own
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("travel-inquiry")}>
            Send an inquiry
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("visa")}>Visa services</button>
        </div>
        <div className="pb-2">
          <Link href="https://xedapvietnam.com.vn/" target="_blank">
            Bike shop & rent
          </Link>
        </div>
      </nav>

      <div className="col-span-1 sm:col-span-9 text-[13px]">
        <SlugCountry />
        <div>
          <h6 className="pt-4">SOLO TRAVELER</h6>
          <p>Looking to make some new friends?</p>
          <p>
            If you are travelling alone, we encourage you to take advantage of
            the forum below to meet new travel companions. If an entry does not
            already exist for the tour you wish to go on, please feel free to
            “sign” the guest book and create a new entry.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="cursor-pointer underline text-blue-600">
            Sign GuestBook
          </a>
          <a className="cursor-pointer underline text-blue-600">View Entries</a>
        </div>
      </div>
    </div>
  );
};

export default AloneTraveler;
