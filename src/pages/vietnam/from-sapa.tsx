import { useRouter } from 'next/router';
import React from 'react';
import { RiArrowRightSFill } from 'react-icons/ri';

const FromSapa = () => {
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

      <div className="col-span-9"></div>
    </div>
  );
}

export default FromSapa;