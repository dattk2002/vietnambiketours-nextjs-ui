import React from "react";
import SlugCountry from "@/components/slug-country/SlugCountry";
import Link from "next/link";
import { useRouter } from "next/router";
import GroupBikeTours from "./group-bike-tours";
import TailorMakeQuote from "./tailor-make-quote";
import Visa from "./visa";

const TravelInquiry = () => {
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
          <button onClick={() => navigateTo("#")}>Send an inquiry</button>
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
        <div className="col-span-9 text-[13px]">
          <p className="pb-3">
            <SlugCountry></SlugCountry>
          </p>
          <div>
            <h6>TRAVEL INQUIRY</h6>
            <p>
              TRAVEL INQUIRY Send us an inquiry or if you prefer to contact us
              by email click{" "}
              <span className="underline text-black">
                info@vietnambiketours.com
              </span>
            </p>
          </div>
          <div className=" mx-auto pt-6 pl-6">
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex">
                <label htmlFor="" className="pr-14">
                  <li>First Name*:</li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="" className="pr-14">
                  <li>Last Name*:</li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="" className="pr-[86px]">
                  <li>Email*:</li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[37px]">Confirm Email*:</li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[66px]">Telephone: </li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[56px]">Nationality*:</li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[50px]">Arrival Date*:</li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[28px]">Departure Date*:</li>
                </label>
                <input
                  className="border border-gray-950 rounded-sm"
                  type="text"
                />
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[82px]">Adults*:</li>
                </label>
                <select className="border border-gray-950 rounded-sm" value="">
                  <option id="00">00</option>
                  <option id="01">01</option>
                  <option id="02">02</option>
                  <option id="03">03</option>
                  <option id="04">04</option>
                  <option id="05">05</option>
                  <option id="06">06</option>
                  <option id="07">07</option>
                  <option id="08">08</option>
                  <option id="08">09</option>
                  <option id="08">10</option>
                </select>
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[24px]">Children(2-12yrs):</li>
                </label>
                <select className="border border-gray-950 rounded-sm" value="">
                  <option id="00">00</option>
                  <option id="01">01</option>
                  <option id="02">02</option>
                  <option id="03">03</option>
                  <option id="04">04</option>
                  <option id="05">05</option>
                  <option id="06">06</option>
                  <option id="07">07</option>
                  <option id="08">08</option>
                  <option id="08">09</option>
                  <option id="08">10</option>
                </select>
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="pr-[38px]">Infants(0-2yrs):</li>
                </label>
                <select className="border border-gray-950 rounded-sm" value="">
                  <option id="00">00</option>
                  <option id="01">01</option>
                  <option id="02">02</option>
                  <option id="03">03</option>
                  <option id="04">04</option>
                  <option id="05">05</option>
                  <option id="06">06</option>
                  <option id="07">07</option>
                  <option id="08">08</option>
                  <option id="08">09</option>
                  <option id="08">10</option>
                </select>
              </div>
              <div className="col-span-1 flex">
                <label htmlFor="">
                  <li className="break-words">How did you find us* ?</li>
                </label>
                <select className="border border-gray-950 rounded-sm" value="">
                  <option id="00">00</option>
                  <option id="01">01</option>
                  <option id="02">02</option>
                  <option id="03">03</option>
                  <option id="04">04</option>
                  <option id="05">05</option>
                  <option id="06">06</option>
                  <option id="07">07</option>
                  <option id="08">08</option>
                  <option id="08">09</option>
                  <option id="08">10</option>
                </select>
              </div>
              <div className="col-span-2 flex">
                <label htmlFor="special-inquiries" className="">
                  <li className="pr-[70px]">Special Inquiries:</li>
                </label>
                <div className="w-full gap-4">
                  <textarea
                    id="special-inquiries"
                    name="special-inquiries"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pb-4"
                  ></textarea>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="border px-2 py-1 border-gray-950 rounded-sm"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-2 "></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInquiry;
