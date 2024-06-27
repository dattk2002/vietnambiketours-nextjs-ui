import SlugCountry from "@/components/slug-country/SlugCountry";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import HCM from "./vietnam/from-hcm";

const Vietnam = () => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <div className="flex-col grid gap-4 sm:grid-cols-12 pt-5">
        <nav className="sm:col-span-3 text-[12px]">
          <div className="pb-2 ">
            <button
              className="flex"
              onClick={() => navigateTo("/vietnam/from-hcm")}
            >
              <RiArrowRightSFill className="text-[20px]" /> Cycling form HCM
              city
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
              <RiArrowRightSFill className="text-[20px]" /> Cycling from Nha
              Trang
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

        <div className="col-span-9">
          <p className="text-[13px] pb-3">
            <SlugCountry />
          </p>
          <p className="text-[13px] ">VIETNAM OVERVIEW</p>
          <p className="text-[13px] pb-3">
            The natural landscape of Vietnam ranges from the fertile, green
            paddy fields of the Mekong Delta in the south, to long stretches of
            sandy beaches along the coastal area, with highlands and mountains
            in the north. A warm and friendly people will welcome you as you
            explore quiet villages and bustling cities and experience a unique
            blend of rich heritage and modern tourist facilities.
          </p>
          <p className="text-[13px] ">About Vietnam:</p>
          <ul className="text-fs pl-10">
            <li className="list-disc">
              Official name: Socialist Republic of Vietnam
            </li>
            <li className="list-disc">
              Population: 95,554,759 (April 6, 2018)
            </li>
            <li className="list-disc">
              Capital city: Hanoi (7,6 million); Ho Chi Minh City (8,6 million)
            </li>
            <li className="list-disc">Area: 332,698 km2</li>
            <li className="list-disc">
              Administrative units: Vietnam is divided into 64 provinces and
              cities.{" "}
            </li>
            <li className="list-disc">
              Weather: Sub-tropical climate with four seasons (Spring, Summer,
              Autumn, Winter) in the North and two seasons (dry and rainy) in
              the south.
            </li>
            <li className="list-disc">Time zone: GMT +7</li>
            <li className="list-disc">
              Religion: Buddhism, Christianity, Catholicism, Islam, Hoa Hao, Cao
              Dai
            </li>
            <li className="list-disc">
              Currency: The Vietnamese Dong (VND) is the official currency.{" "}
            </li>
            <li className="list-disc">Video introduction: Click here</li>
          </ul>
          <p className="text-[13px]">Cycling in Vietnam:</p>
          <p className="text-[13px] pb-3">
            Vietnams number of visitors for tourism and vacation has increased
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

export default Vietnam;
