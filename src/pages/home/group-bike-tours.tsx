import FacebookFrame from "@/components/FacebookFrame";
import Link from "next/link";
import React from "react";
import TailorMakeQuote from "./tailor-make-quote";
import TravelInquiry from "./travel-inquiry";
import Visa from "./visa";
import AloneTraveler from "./alone-traveler";
import { useRouter } from "next/router";
import SlugCountry from "@/components/slug-country/SlugCountry";

const GroupBikeTours = () => {
  const router = useRouter();
  const { pathname } = router;

  const renderContent = () => {
    switch (pathname) {
      case "alone-traveler":
        return <AloneTraveler />;
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
          <button onClick={() => navigateTo("#")}>Group-join</button>
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
        <div>
          <p className="italic">Group Bicycle Tours - guaranteed departure</p>
          <p>
            If you wish to join an existing group bike tour with a guaranteed
            departure date, see below for the current schedule. We’re currently
            accepting cyclists for the following:
          </p>
          <p>Please contact us for a group join</p>
          <p>
            Email:{" "}
            <span className="underline text-black">
              info@vietnambiketours.com
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupBikeTours;
