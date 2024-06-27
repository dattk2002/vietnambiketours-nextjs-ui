import SlugCountry from "@/components/slug-country/SlugCountry";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiArrowRightSFill } from "react-icons/ri";

interface Content {
  id: number;
  attributes: {
    Title: string;
    Expert: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const MekongDelta = () => {
  const [expert, setExpert] = useState<Content[]>([]);
  const BASE_URL = "http://localhost:1337";
  const getExpert = async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/cycling-melkongdeltas?populate=*"
      );
      const data = await res.json();
      const listData = data.data as Content[];
      setExpert(listData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getExpert();
  }, []);
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <div className="flex-col grid gap-4 sm:grid-cols-12 pt-5">
      <nav className="sm:col-span-3 text-[12px]">
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/from-hcm")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling form HCM city
          </button>
        </div>
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/mekong-delta")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling Mekong delta
          </button>
        </div>
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/from-dalat")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling from Da Lat
          </button>
        </div>
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/from-nhatrang")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling from Nha Trang
          </button>
        </div>
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/from-hoian")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling form Hoi An
          </button>
        </div>
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/from-hue")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling form Hue
          </button>
        </div>
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/from-sapa")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling form Sapa
          </button>
        </div>
        <div className="pb-2 ">
          <button
            className="flex"
            onClick={() => navigateTo("/vietnam/from-hanoi")}
          >
            <RiArrowRightSFill className="text-[20px]" /> Cycling form Ha Noi
          </button>
        </div>
      </nav>

      <div className="col-span-9 text-[13px]">
        <SlugCountry />
        <div>
          <ul className="flex divide-x gap-4 pt-2 divide-black">
            <li>
              <Link href={"/"}>Introduction Mekong</Link>
            </li>
            <li className="pl-3">
              <Link href={"/"}>What to see in Mekong</Link>
            </li>
            <li className="pl-3">
              <Link href={"/"}>Where to stay in Mekong</Link>
            </li>
            <li className="pl-3">
              <Link href={"/"}>Blank</Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-12 ">
          <div className="col-span-9  pt-2">
            <div>
              <h1>BIKE TOURS IN MEKONG DELTA - VIETNAM</h1>
            </div>
            <div className="divide-black divide-y divide-dashed divide-black">
              <div>
                <li className="pb-3 pl-5 pt-2">
                  BIKING full day Mekong - SAIGON to MYTHO{" "}
                </li>
                <p className="text-pd">
                  On this My Tho boat & bike trip, you’ll meander along the
                  mighty Mekong River, cruising past rural villages through a
                  maze of narrow canals and enjoying honeybee tea and coconut
                  candy on islands founded in the 1680s.{" "}
                  <Link href={"/"} className="underline text-black">
                    More Details
                  </Link>{" "}
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <Link className="underline text-black" href="/contact-us">
                    Let us know
                  </Link>{" "}
                  if our organized tours don&apos;t meet your desire or
                  expectation. We can tailor another to accommodate your
                  preferences. You may customize your own tour.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 pt-2">đâsd</div>
        </div>
      </div>
    </div>
  );
};

export default MekongDelta;
