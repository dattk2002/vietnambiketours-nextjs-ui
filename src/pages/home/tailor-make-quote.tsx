import React from "react";
import FacebookFrame from "@/components/FacebookFrame";
import Link from "next/link";
import TravelInquiry from "./travel-inquiry";
import Visa from "./visa";
import AloneTraveler from "./alone-traveler";
import { useRouter } from "next/router";
import SlugCountry from "@/components/slug-country/SlugCountry";

const TailorMakeQuote = () => {
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
        <SlugCountry></SlugCountry>
        <div>
          <h6 className="py-5">Customize your own tour</h6>
          <p>
            Planning your journey is one of the joys of travel, so enjoy
            contemplating what you want out of your holiday. If you do not like a
            form? click here sales@vietnambiketours.com
          </p>
          <p>Your information</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-12">
          <div className="col-span-3">
            <ul>
              <li className="pb-3">Title:</li>
              <li className="pb-3">First Name:</li>
              <li className="pb-3">Last Name:</li>
              <li className="pb-3">Nationality:</li>
              <li className="pb-3">Email:</li>
              <li className="pb-3">Adventure Destinations Departing in:</li>
              <li className="pb-3">Finishing in:</li>
              <li className="pb-3">Adventure Date Arrival Date:</li>
              <li className="pb-3">Departure Date:</li>
              <li className="pb-3">Not sure Date but properly in:</li>
              <li className="pb-3">Adventure Trip Length: </li>
            </ul>
          </div>
          <div className="col-span-9 pl-3">
            <div className="pb-3">
              <select
                name=""
                id=""
                className="border rounded-t-sm  border-gray-950"
              >
                <option value="">Select</option>
                <option value="">Mr.</option>
                <option value="">Mrs.</option>
                <option value="">Ms.</option>
                <option value="">Dr.</option>
                <option value="">Prof.</option>
              </select>
            </div>

            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950"
                type="text"
                name=""
                id=""
              />
            </div>

            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pb-3">
              <select
                name=""
                id=""
                className="border rounded-t-sm  border-gray-950"
              >
                <option value="">Select</option>
                <option value="">Ha Noi</option>
                <option value="">Hue</option>
                <option value="">Da Nang</option>
                <option value="">Hoi An</option>
                <option value="">Nha Trang</option>
                <option value="">Sai Gon</option>
                <option value="">Phnom Penh</option>
                <option value="">Siem Reap</option>
                <option value="">BangKok</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="pb-3 pt-4">
              <select
                name=""
                id=""
                className="border rounded-t-sm  border-gray-950"
              >
                <option value="">Select</option>
                <option value="">Ha Noi</option>
                <option value="">Hue</option>
                <option value="">Da Nang</option>
                <option value="">Hoi An</option>
                <option value="">Nha Trang</option>
                <option value="">Sai Gon</option>
                <option value="">Phnom Penh</option>
                <option value="">Siem Reap</option>
                <option value="">BangKok</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950 "
                type="text"
                name=""
                placeholder="dd/mm/yyyy"
                id=""
              />
            </div>
            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950"
                type="text"
                placeholder="dd/mm/yyyy"
                name=""
                id=""
              />
            </div>
            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950"
                type="text"
                placeholder="dd/mm/yyyy"
                name=""
                id=""
              />
            </div>
            <div className="pb-3">
              <input
                className="border rounded-t-sm w-[257px] border-gray-950"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div>
          <h6>Adventure Grade Styles</h6>
          <p>
            Factors affecting grading include: degree of uphill/downhill
            cycling, difficulty of road surfaces, amount of bike handling skill
            required, distance covered, heat, altitude and/or remoteness. Please
            remember that all tours involve some physical exertion* My interests
            are in:
          </p>
          <form action="">
            <fieldset className="flex gap-4">
              <input
                type="radio"
                name="gentle-adventures"
                value="gentle-adventures"
                id="gentle-adventures"
                className="rounded-full"
              />
              <label htmlFor="gentle-adventures">Gentle Adventures</label>
              <input
                type="radio"
                name="Moderate"
                id="moderate"
                value="Moderate-Adventures"
                className="rounded-full"
              />
              <label htmlFor="moderate">Moderate Adventures</label>
              <input
                type="radio"
                name="Tough"
                id="tough"
                value="Tough-Adventures"
                className="rounded-full"
              />
              <label htmlFor="tough">Tough Adventures</label>
            </fieldset>
          </form>

          <p className="pt-3">
            Please use the box below to provide us with details about your
            custom tour. If you have a particular route in mind, please let us
            know. Please include as much detail as possible i.e.: information on
            special requirements, must-see places, pace, anticipated timeline
            for your journey, etc.
          </p>
          <textarea
            className="col-auto w-full border border-gray-950 rounded-md h-16"
            name=""
            id=""
          ></textarea>
          <p>prefer you to organize my trip with a majority of:</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-12">
          <div className="col-span-4">
            <ul>
              <li className="pb-3">Hotels:</li>
              <li className="pb-3">How many people? </li>
              <li className="pb-3">The group is:</li>
              <li className="pb-3">How did you hear about us?</li>
            </ul>
          </div>
          <div className="col-span-8">
            <div className="flex gap-3 pb-4">
              <div>
                <input type="radio" name="" id="" />
                <label>2 Stars</label>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <label>3 Stars</label>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <label>4 Stars</label>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <label>5 Stars</label>
              </div>
            </div>
            <div className="pb-4">
              <select
                name=""
                id=""
                className="w-14 border border-gray-950 rounded-sm"
              >
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
            </div>
            <div className="pb-4">
              <select
                name=""
                id=""
                className="w-24 border border-gray-950 rounded-sm"
              >
                <option value=""></option>
                <option value="">A Couple</option>
                <option value="">A Family</option>
                <option value="">Friends</option>
                <option value="">An Individual</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="pb-4">
              <select
                name=""
                id=""
                className="w-28 border border-gray-950 rounded-sm"
              >
                <option value=""></option>
                <option value="">Google search</option>
                <option value="">Yahoo search</option>
                <option value="">Facebook</option>
                <option value="">Twitter</option>
                <option value="">Youtube</option>
                <option value="">Linkin</option>
                <option value="">Bing search</option>
                <option value="">Travel trade</option>
                <option value="">Magazine</option>
                <option value="">From a friend</option>
                <option value="">From a web link</option>
                <option value="">Local newspapers</option>
                <option value="">TripAdvisor.com</option>
                <option value="">City-pass</option>
                <option value="">Word mouth</option>
                <option value="">Others</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <p>Thank you. Almost done...</p>
          <button className="border border-gray-950 px-1 rounded-sm text-black bg-slate-200">
            Send Your Inquiries
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailorMakeQuote;
