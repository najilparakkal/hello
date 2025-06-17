"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Gallery() {
  const images = [
    "/gallery/unnamed 1.png",
    "/gallery/unnamed 3.png",
    "/gallery/unnamed 4.png",
    "/gallery/unnamed.webp",
  ];

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const leftSliderSettings = {
    ...sliderSettings,
    autoplaySpeed: 3000,
    rtl: true,
  };

  const rightSliderSettings = {
    ...sliderSettings,
    autoplaySpeed: 3500,
  };

  return (
    <div id="gallery" className="w-full bg-white md:p-10 px-0 py-4">
      <div className="flex w-full flex-col md:flex-row gap-10 px-4  md:px-20">
        <div className="w-full md:w-1/2 space-y-3">
          <div className="slider-container">
            <Slider {...leftSliderSettings}>
              {images.concat(images).map((img, index) => (
                <div key={`left-${index}`} className="px-2">
                  <div className="relative h-32 w-full">
                    <Image
                      src={img}
                      alt={`Event ${index + 1}`}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="slider-container">
            <Slider {...rightSliderSettings}>
              {[...images]
                .reverse()
                .concat([...images].reverse())
                .map((img, index) => (
                  <div key={`right-${index}`} className="px-2">
                    <div className="relative h-32 w-full">
                      <Image
                        src={img}
                        alt={`Event ${index + 1}`}
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <div className="w-full  flex flex-col justify-center items-center">
          <div className=" md:w-[80%]  w-full  space-y-6 flex justify-center flex-col ">
            <h1 className="text-2xl font-semibold  text-gray-800 md:text-start text-center">
              Unlock Your Dream Event with Our Experts
            </h1>
            <p className="text-sm montserrat text-gray-600 md:text-start text-center ">
              From weddings to corporate functions, we bring your vision to life
              with creativity and precision. Contact us today via call or
              WhatsApp using the buttons below.
            </p>
            <div className="flex gap-3 justify-center items-center">
              <button className="bg-[#BBE8FF] text-sm flex items-center gap-1 text-black font-semibold  px-6 py-1.5 rounded-md hover:bg-gray-800 transition">
                <FaPhoneAlt />
                Talk to Expert
              </button>
              <button className="bg-green-500 text-sm flex items-center gap-1 text-white px-6 py-1.5 rounded-md font-medium hover:bg-green-600 transition">
                <FaWhatsapp height={20} width={20} className="text-green-500" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .slick-slider {
          overflow: hidden;
        }
        .slick-list {
          margin: 0 -8px;
        }
        .slick-slide > div {
          padding: 0 1px;
        }
      `}</style>
    </div>
  );
}
