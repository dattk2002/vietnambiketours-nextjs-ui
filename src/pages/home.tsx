import FacebookFrame from "@/components/FacebookFrame";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";


const Home = () => {
  return (
    <>
      <div className="px-16 flex-col grid gap-4 sm:grid-cols-12 pt-5">
        <nav className="flex-col flex col-span-3 text-[13px]">
          <Link className="pb-2" href="/alone-traveler">
            Solo cyclist
          </Link>
          <Link className="pb-2" href="group-bike-tours">
            Group-join
          </Link>
          <Link className="pb-2" href="/tailor-make-quote">
            Customize your own
          </Link>
          <Link className="pb-2" href="/travel-inquiry">
            Send an inquiry
          </Link>
          <Link className="pb-2" href="/visa">
            Visa services
          </Link>
          <Link
            className="pb-2"
            href="https://xedapvietnam.com.vn/"
            target="_blank"
          >
            Bike shop & rent
          </Link>
          <div>
            <div className="pt-10">
              <Link href="/" className="font-bold text-1.75 underline">
                Vietnam Bike Tours
              </Link>
            </div>
            <div>
              <span className="flex gap-[1px] pl-9 pt-3">
                <FaCircle style={{color: "#00aa6c"}}/>
                <FaCircle style={{color: "#00aa6c"}}/>
                <FaCircle style={{color: "#00aa6c"}}/>
                <FaCircle style={{color: "#00aa6c"}}/>
                <FaCircleHalfStroke  style={{color: "#00aa6c"}}/>
              </span>
              <span className="pl-9 text-[11px]">626 reviews</span>
            </div>
            <div>
              <Link target="_blank" href="/https://www.tripadvisor.com/">
                <Image
                  src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                  width={200}
                  height={200}
                  alt=""
                  className="w-[115px]"
                />
              </Link>
            </div>
          </div>
          <div>
            <Link href='/'>
              <Image src="/images/wta-logo.png" className="w-[140px] pt-[6rem]"  width={200} height={200} alt="" />
            </Link>
          </div>
        </nav>

        <div className="col-span-9">
          <p className="text-[13px] pb-3">
            Vietnam Bike Tours are guided cycling experiences that take place in
            the beautiful country of Vietnam & Southeast Asia. These tours offer
            a unique and immersive way to explore the diverse landscapes, rich
            culture, and vibrant cities of Vietnam, Cambodia, Laos, Thailand,
            Myanmar & more, on two wheels.
          </p>
          <p className="text-[13px] pb-3">
            During these tours, participants ride bicycles through various
            regions of Vietnam & Southeast Asia, depending on the specific
            itinerary. Some popular destinations include Hanoi, Halong Bay, Hue,
            Hoi An, Nha Trang, Ho Chi Minh City (formerly known as Saigon), Siem
            Reap, Luang Prabang, Chiang Mai, Bangkok, Bagan, Mandalay, Yangon
            and the Mekong Delta.
          </p>
          <p className="text-[13px] pb-3">
            The routes typically cover a mix of terrains ranging from flat
            coastal roads to challenging mountainous paths. Participants can
            expect to cycle through scenic countryside landscapes with rice
            fields, lush forests, traditional villages, and stunning coastal
            areas.
          </p>
          <p className="text-[13px] pb-3">
            Vietnam Bike Tours often include visits to popular tourist
            attractions and cultural sites along the way. This could involve
            exploring ancient temples and pagodas or learning about local
            traditions and customs from knowledgeable guides. There are also
            opportunities to taste authentic Vietnamese cuisine, Thai cuisine,
            Laos cuisine, Burmese cuisine and Khmer cuisine during meals stops
            or cooking classes.
          </p>
          <p className="text-[13px] pb-3">
            These tours cater to different levels of cycling ability and can be
            customized based on individual preferences. They provide support
            vehicles for those who may need a break from cycling or assistance
            with any unexpected situations.
          </p>
          <p className="text-[13px] pb-3">
            Overall, Vietnam Bike Tours offer an active way to discover the
            beauty of Vietnam and Southeast Asia while immersing oneself in its
            culture and history. Its an excellent option for adventure seekers
            who enjoy outdoor activities and want a unique travel experience in
            these fascinating countries.
          </p>
          <FacebookFrame />
        </div>
      </div>
    </>
  );
};

export default Home;
