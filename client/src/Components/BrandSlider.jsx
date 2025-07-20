import React from "react";
import adobe from "../assets/BrandsLogo/adobe.png";
import amazon from "../assets/BrandsLogo/amazon.png";
import dell from "../assets/BrandsLogo/dell.png";
import duolingo from "../assets/BrandsLogo/duolingo.png";
import figma from "../assets/BrandsLogo/figma.png";
import filpkart from "../assets/BrandsLogo/filpkart.png";
import magento from "../assets/BrandsLogo/magento.png";
import netfilx from "../assets/BrandsLogo/netfilx.png";
import tiktok from "../assets/BrandsLogo/tiktok.png";
import wordpress from "../assets/BrandsLogo/wordpress.png";
import xiaomi from "../assets/BrandsLogo/xiaomi.png";

// 1) Define an array of brand logos
const brandImages = [
  { src: adobe, alt: "adobe" },
  { src: amazon, alt: "amazon" },
  { src: dell, alt: "dell" },
  { src: duolingo, alt: "duolingo" },
  { src: figma, alt: "figma" },
  { src: filpkart, alt: "filpkart" },
  { src: magento, alt: "magento" },
  { src: netfilx, alt: "netfilx" },
  { src: tiktok, alt: "tiktok" },
  { src: wordpress, alt: "wordpress" },
  { src: xiaomi, alt: "xiaomi" },
];

export default function BrandSlider() {
  return (
    <div className="relative w-full mx-auto bg-white py-6 shadow rounded-lg overflow-x-auto">
      <div className="flex justify-center items-center space-x-4 sm:space-x-10">
        {brandImages.map((brand, idx) => (
          <div key={idx} className="flex-shrink-0 w-20 sm:w-32 h-12 sm:h-16">
            <img
              src={brand.src}
              alt={brand.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
