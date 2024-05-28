import React from "react";
import Image from "next/image";
import { count } from "console";

type Props = {
  country: string;
};

const CountryImg = [
  {
    country: "vietnam",
    img: [
      "/images/vietnam-1.jpg",
      "/images/vietnam-2.jpg",
      "/images/vietnam-3.jpg",
      "/images/vietnam-4.jpg",
      "/images/vietnam-5.jpg",
    ],
  },

  {
    country: "cambodia",
    img: [
      "/images/Cambodia~~element141~~17.jpg",
      "/images/Cambodia~~element141~~16.jpg",
      "/images/Cambodia~~element141~~4.jpg",
      "/images/Cambodia~~element141~~18.jpg",
      "/images/Cambodia~~element141~~15.jpg",
    ],
  },
  {
    country: "thailand",
    img: [
      "/images/thailand-1.jpg",
      "/images/thailand-2.jpg",
      "/images/thailand-3.jpg",
      "/images/thailand-4.jpg",
      "/images/thailand-5.jpg",
    ],
  },
  {
    country: "multi-country",
    img: [
      "/images/Multi-Country-1.jpg",
      "/images/Multi-Country-2.jpg",
      "/images/Multi-Country-3.jpg",
      "/images/Multi-Country-4.jpg",
      "/images/Multi-Country-5.jpg",
    ],
  },
  {
    country: "reviews",
    img: [
      "/images/review-1.jpg",
      "/images/review-2.jpg",
      "/images/review-3.jpg",
      "/images/review-4.jpg",
      "/images/review-5.jpg",
    ],
  },
  {
    country: "contact-us",
    img: [
      "/images/contact-1.jpg",
      "/images/contact-2.jpg",
      "/images/contact-3.jpg",
      "/images/contact-4.jpg",
      "/images/contact-5.jpg",
    ],
  },
  {
    country: "", // Trường hợp không tìm thấy country
    img: [
      "/images/home-1.jpg",
      "/images/home-2.jpg",
      "/images/home-3.jpg",
      "/images/home-4.jpg",
      "/images/home-5.jpg",
    ],
  },
];

const ImgCoutry = ({ country }: Props) => {
  console.log("countryv2", country);
  // Tìm đối tượng country trong mảng CountryImg
  const selectedCountry = CountryImg.find((c) => c.country === country);
  // Nếu không tìm thấy, trả về null hoặc xử lý theo ý của bạn
  if (!selectedCountry) return null;
  // Lấy danh sách hình ảnh tương ứng với country đã chọn
  const images = selectedCountry.img;
  return (
    <div className="flex space-x-4 p-4 justify-center">
      {/* Sử dụng map để render mỗi hình ảnh */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${selectedCountry.country} Image ${index + 1}`}
          width={150}
          height={150}
        />
      ))}
    </div>
  );
};

export default ImgCoutry;
