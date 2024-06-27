import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MekongDelta from "./mekong-delta";
import FromDalat from "./from-dalat";
import FromNhaTrang from "./from-nhatrang";
import FromHoiAn from "./from-hoian";
import SlugCountry from "@/components/slug-country/SlugCountry";
import FromHue from "./from-hue";
import FromSapa from "./from-sapa";
import FromHanoi from "./from-hanoi";
import Link from "next/link";
import { RiArrowRightSFill } from "react-icons/ri";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";

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

const HCM = () => {
  const [expert, setExpert] = useState<Content[]>([]);
  const BASE_URL = "http://localhost:1337";
  const getExpert = async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/cycling-vietnams?populate=*"
      );
      const data = await res.json();
      const listData = data.data as Content[];
      setExpert(listData);
      console.log(listData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getExpert();
  }, []);

  const router = useRouter();
  const { pathname } = router;
  const renderContent = () => {
    switch (pathname) {
      case "form-hcm":
        return <MekongDelta />;
      case "from-dalat":
        return <FromDalat />;
      case "from-nha-trang":
        return <FromNhaTrang />;
      case "from-hoi-an":
        return <FromHoiAn />;
      case "from-hue":
        return <FromHue />;
      case "from-sapa":
        return <FromSapa />;
      case "from-hanoi":
        return <FromHanoi />;

      default:
        return <SlugCountry />;
    }
  };
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:pt-5">
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

      <div className="col-span-1 sm:col-span-9 text-[13px]">
        <SlugCountry />
        <h1 className="font-bold pt-2 ">Vietnam Bike Tours® HCM city</h1>
        <div className="flex items-center pt-2 ">
          <div className="sha-dow flex gap-2">
            <div className="bg-[#34e0a1] p-[10.4px] rounded-s-sm ">
              <Link href={"https://www.tripadvisor.com/"} target="_blank">
                <Image
                  width={200}
                  height={200}
                  alt=""
                  className="w-[115px]"
                  src={
                    "https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                  }
                ></Image>
              </Link>
            </div>
            <div className="flex items-center bg-white gap-2">
              <div className="underline font-bold text-black !text-[14px]">
                <Link
                  href={
                    "https://www.tripadvisor.com/Attraction_Review-g293925-d1307686-Reviews-Vietnam_Bike_Tours-Ho_Chi_Minh_City.html"
                  }
                >
                  Vietnam Bike Tours
                </Link>
              </div>
              <div className="flex gap-[1px]  max-md:hidden">
                {[...Array(5)].map((_, index) => (
                  <FaCircle key={index} style={{ color: "#00aa6c" }} />
                ))}
                <FaCircleHalfStroke style={{ color: "#00aa6c" }} />
              </div>
              <div className=" text-[11px] max-md:hidden pr-3">626 reviews</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-12 ">
          <div className="col-span-8 divide-y divide-dashed divide-black pt-10">
            <div className="pb-1">
              <h1>BIKE TOURS START IN HO CHI MINH CITY - VIETNAM</h1>
            </div>
            <div>
              <li className="pl-5 pb-5 pt-2">AIRPORT PICK UP BY BICYCLE</li>
              <p>
                To experience the city by bicycle when you arrive the airport ?
                Take this tour of 10km ride to your hotel. It brings you
                different feelings of the dynamic city. Your luggage is taken
                care.{" "}
                <a
                  href="mailto:infor@vietnambiketours.com"
                  className="underline text-black"
                >
                  Email Us
                </a>
              </p>
            </div>

            {expert.map((item) => (
              <div key={item.id}>
                <div className="flex">
                  <div>
                    <li className="pl-5 pb-1 pt-2">{item.attributes.Title}</li>
                    <p className="text-pd">
                      {item.attributes.Expert}{" "}
                      <Link
                        href="mailto:infor@vietnambiketours.com"
                        className="underline text-black"
                      >
                        More details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <p>
                {" "}
                <a className="underline text-black" href="/contact-us">
                  Let us know
                </a>{" "}
                if our organized tours don&apos;t meet your desire or
                expectation. We can tailor another to accommodate your
                preferences. You may customize your own tour.
              </p>
            </div>
          </div>
          <div className="col-span-4 pt-60 pl-14">
            {expert.map((item) => (
              <div key={item.id}>
                {item.attributes.image?.data?.attributes?.url ? (
                  <Image
                    src={`${BASE_URL}${item.attributes.image.data.attributes.url}`}
                    alt=""
                    height={500}
                    width={500}
                    className="w-[150px] h-[112px] pb-2"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCM;
