import SlugCountry from "@/components/slug-country/SlugCountry";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import GroupBikeTours from "./group-bike-tours";
import TailorMakeQuote from "./tailor-make-quote";
import TravelInquiry from "./travel-inquiry";
const Visa = () => {
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
          <button onClick={() => navigateTo("#")}>Visa services</button>
        </div>
        <div className="pb-2">
          <Link href="https://xedapvietnam.com.vn/" target="_blank">
            Bike shop & rent
          </Link>
        </div>
      </nav>

      <div className="col-span-1 sm:col-span-9 text-[13px]">
        <SlugCountry></SlugCountry>
        <div>
          <p>
            When you book a tour with us, we do free of charge of the visa
            service.{" "}
          </p>
          <li className="pl-5">Vietnam E-visa government website</li>
          <p className="pt-4 underline text-black">
            https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/trang-chu-ttdt
          </p>
          <li className="pl-5">Myanmar E-visa government website</li>
          <p className="pt-4 underline text-black">
            https://evisa.moip.gov.mm/
          </p>
        </div>
      </div>
    </div>
  );
};

export default Visa;
