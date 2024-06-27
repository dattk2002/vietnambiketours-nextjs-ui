import FacebookFrame from "@/components/FacebookFrame";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";

interface Content {
  id: number;
  attributes: Attributes;
}
interface Attributes {
  id: number;
  description: Paragraph[];
}
interface Paragraph {
  type: string;
  children: Text[];
}
interface Text {
  type: string;
  text: string;
}

const Home = () => {
  const [homes, setHomes] = useState<Content[]>([]);
  const router = useRouter();

  const getdata = async () => {
    try {
      const res = await fetch("http://192.168.2.11:1337/api/homes/");
      const data = await res.json();
      const listData = data.data as Content[];
      setHomes(listData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:pt-5">
      <nav className="sm:col-span-3 text-[12px]">
        <div className="pb-2">
          <button onClick={() => navigateTo("/home/alone-traveler")}>
            Solo cyclist
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("/home/group-bike-tours")}>
            Group-join
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("/home/tailor-make-quote")}>
            Customize your own
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("/home/travel-inquiry")}>
            Send an inquiry
          </button>
        </div>
        <div className="pb-2">
          <button onClick={() => navigateTo("/home/visa")}>
            Visa services
          </button>
        </div>
        <div className="pb-2">
          <Link href="https://xedapvietnam.com.vn/" target="_blank">
            Bike shop & rent
          </Link>
        </div>
        <div className="pt-10 max-md:hidden">
          <button onClick={() => navigateTo("/")}>Vietnam Bike Tours</button>
        </div>
        <div className="flex gap-[1px] pl-5 pt-3 max-md:hidden">
          {[...Array(5)].map((_, index) => (
            <FaCircle key={index} style={{ color: "#00aa6c" }} />
          ))}
          <FaCircleHalfStroke style={{ color: "#00aa6c" }} />
        </div>
        <div className="pl-8 text-[11px] max-md:hidden">626 reviews</div>
        <div className="max-md:hidden">
          <Link href="https://www.tripadvisor.com/" target="_blank">
            <Image
              src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
              width={200}
              height={200}
              alt="Tripadvisor logo"
              className="w-[115px]"
            />
          </Link>
        </div>
        <div className="max-md:hidden">
          <Link href="/">
            <Image
              src="/images/wta-logo.png"
              className="w-[140px] pt-[6rem]"
              width={200}
              height={200}
              alt="WTA logo"
            />
          </Link>
        </div>
      </nav>

      <div className="col-span-1 sm:col-span-9 text-[13px]">
        {homes.length !== 0 ? (
          homes.map((home: Content) => (
            <div key={home.id}>
              {home.attributes.description.map((paragraph, index) => (
                <div key={index}>
                  {paragraph.children.map((child, childIndex) => (
                    <p key={childIndex}>{child.text}</p>
                  ))}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <FacebookFrame />
      </div>
    </div>
  );
};

export default Home;
