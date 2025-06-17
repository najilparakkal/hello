"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { BiChevronLeft, BiChevronRight, BiCloset } from "react-icons/bi";
import { TbPhoto } from "react-icons/tb";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SecondGallery() {
  const [direction, setDirection] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollTimeRef = useRef(0);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const imageList = [
    "/services/amit-kumar-ShO949vJwAg-unsplash.jpg",
    "/services/pablo-hernandez-ut7gsZ3gcu4-unsplash.jpg",
    "/services/unnamed.webp",
    "/banner/kim-allexis-diwa-J9ZN9PSTllA-unsplash[1].jpg",
    "/banner/sumatra-weddings-tyKLwDFdrCU-unsplash.jpg",
  ];
  const duplicatedImages = [...imageList];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newDirection = currentScrollY > scrollY ? "down" : "up";

      setDirection(newDirection);
      setScrollY(currentScrollY);
      lastScrollTimeRef.current = Date.now();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastScroll = Date.now() - lastScrollTimeRef.current;
      const isScrolling = timeSinceLastScroll < 150;

      if (
        isScrolling &&
        direction &&
        sliderRef1.current &&
        sliderRef2.current
      ) {
        const speed = 1;

        if (direction === "down") {
          sliderRef1.current.slickNext();
          sliderRef2.current.slickPrev();
        } else {
          sliderRef1.current.slickPrev();
          sliderRef2.current.slickNext();
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: isMobile,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: !isMobile,
    variableWidth: false,
    swipe: isMobile,
    touchMove: isMobile,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          autoplay: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          swipe: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
          autoplay: true,
          swipe: true,
          touchMove: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "James K.",
      image: "/users/image (25).png",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah M.",
      image: "/users/image (25).png",
      review:
        "Amazing service! The team went above and beyond to deliver exactly what we needed. Highly recommend!",
      rating: 5,
    },
    {
      id: 3,
      name: "David L.",
      image: "/users/image (25).png",
      review:
        "Professional, reliable, and exceptional quality. This exceeded all my expectations. Will definitely use again!",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily R.",
      image: "/users/image (25).png",
      review:
        "Outstanding experience from start to finish. The attention to detail and customer service was remarkable.",
      rating: 5,
    },
    {
      id: 5,
      name: "Michael T.",
      image: "/users/image (25).png",
      review:
        "Top-notch quality and incredible support. This is exactly what I was looking for. Couldn't be happier!",
      rating: 5,
    },
    {
      id: 6,
      name: "David L.",
      image: "/users/image (25).png",
      review:
        "Professional, reliable, and exceptional quality. This exceeded all my expectations. Will definitely use again!",
      rating: 5,
    },
    {
      id: 7,
      name: "Emily R.",
      image: "/users/image (25).png",
      review:
        "Outstanding experience from start to finish. The attention to detail and customer service was remarkable.",
      rating: 5,
    },
    {
      id: 8,
      name: "Michael T.",
      image: "/users/image (25).png",
      review:
        "Top-notch quality and incredible support. This is exactly what I was looking for. Couldn't be happier!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(1);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [{ ...testimonials[currentIndex], position: 0 }];
    }

    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div
      className="bg-black relative w-full h-auto"
      style={{
        // GPU acceleration for container
        willChange: "scroll-position",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-base flex items-center mt-10 gap-2 rounded-md px-2 py-1 bg-[#2D2D2D] text-white">
          <TbPhoto />
          <span>
            <span className="text-yellow-500">G</span>ALLERY
          </span>
        </h1>
      </div>

      <div className="py-10 md:py-20 overflow-x-hidden">
        {/* First Slider */}
        <div className="">
          <Slider {...sliderSettings} ref={sliderRef1}>
            {duplicatedImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="w-[200px] md:w-[250px] h-28 md:h-60 overflow-hidden"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{
                      // GPU acceleration for images
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Second Slider (Reverse) */}
        <div className="">
          <Slider {...sliderSettings} ref={sliderRef2}>
            {[...duplicatedImages].reverse().map((image, index) => (
              <div
                key={`second-${index}`}
                className="w-[200px] md:w-[250px] h-28 md:h-60 overflow-hidden"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{
                      // GPU acceleration for images
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* TESTIMONIALS SECTION - KEEPING YOUR EXACT ANIMATION STYLE */}
      <div
        id="reviews"
        className="relative py-10"
        style={{
          // GPU acceleration for testimonials container
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1/2 bg-black" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />

        <div className="relative z-10 flex items-center justify-center h-auto px-4 py-8 md:py-0">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 md:mb-4 px-4">
                This Is What Our Clients Say
              </h2>
              <p className="text-gray-400 text-xs md:text-sm px-4 max-w-2xl mx-auto">
                Lorem Ipsum dolor sit amet, consectetur adipisicing elit, lorem
                ipsum dolor sit amet
              </p>
            </div>

            {/* Testimonials Container - KEEPING YOUR EXACT LOGIC */}
            <div className="relative">
              <div
                className="flex items-center justify-center gap-2 md:gap-8 px-4 md:px-16"
                style={{
                  // GPU acceleration for testimonials wrapper
                  willChange: "transform",
                  transform: "translate3d(0, 0, 0)",
                }}
              >
                {visibleTestimonials.map((testimonial, index) => {
                  const isCenter = testimonial.position === 0;
                  const isLeft = testimonial.position === -1;
                  const isRight = testimonial.position === 1;

                  return (
                    <motion.div
                      key={testimonial.id}
                      className={`
                        flex flex-col rounded-lg shadow-xl relative
                        ${
                          isCenter
                            ? "w-full max-w-sm md:max-w-md h-auto z-20"
                            : "hidden md:flex w-64 lg:w-80 h-auto z-10"
                        }
                        ${isLeft ? "md:-mr-8" : ""}
                        ${isRight ? "md:-ml-8" : ""}
                      `}
                      animate={{
                        opacity: isCenter ? 1 : isMobile ? 0 : 1,
                        x: isMobile ? 0 : isLeft ? -10 : isRight ? 10 : 0,
                        y: isCenter ? -5 : 5,
                        scale: isCenter ? (isMobile ? 1 : 1.15) : 0.7,
                        zIndex: isCenter ? 20 : 10,
                        rotateY: isMobile ? 0 : isLeft ? -15 : isRight ? 15 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 25,
                        mass: 0.8,
                      }}
                      style={{
                        transformPerspective: 200,
                        transformStyle: "flat",
                        // CRITICAL GPU ACCELERATION - This makes it smooth!
                        willChange: "transform, opacity",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                      }}
                      layout
                      layoutId={`testimonial-${testimonial.id}`}
                    >
                      <motion.div
                        className="h-full flex flex-col md:flex-row gap-3 md:gap-3.5 p-4 md:p-5 bg-white rounded-lg shadow-md"
                        animate={{
                          boxShadow: isCenter
                            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                        transition={{ duration: 0.9 }}
                        style={{
                          // GPU acceleration for card content
                          willChange: "box-shadow",
                          transform: "translate3d(0, 0, 0)",
                        }}
                      >
                        {/* User Image */}
                        <div
                          className="flex-shrink-0 bg-gray-100 w-16 h-16 md:w-1/4 md:h-28 rounded-none md:mt-3 relative mx-auto md:mx-0"
                          style={{
                            // GPU acceleration for image container
                            willChange: "transform",
                            transform: "translate3d(0, 0, 0)",
                          }}
                        >
                          <div className="w-full h-full absolute bottom-2 left-2 flex items-center justify-center rounded-none">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              width={46}
                              height={46}
                              className="object-cover h-full w-full rounded-none"
                              alt="User avatar"
                              style={{
                                // GPU acceleration for user image
                                willChange: "transform",
                                backfaceVisibility: "hidden",
                              }}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow md:w-3/4 space-y-2 md:space-y-2 md:px-4 text-center md:text-left">
                          <blockquote className="text-gray-600 italic text-xs md:text-xs leading-relaxed line-clamp-4 md:line-clamp-none">
                            {testimonial.review}
                          </blockquote>

                          {/* Stars */}
                          <div className="flex justify-center md:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-4 h-4 md:w-6 md:h-6"
                                style={{
                                  // GPU acceleration for star containers
                                  willChange: "transform",
                                  transform: "translate3d(0, 0, 0)",
                                }}
                              >
                                <DotLottieReact
                                  src="https://lottie.host/b6eb3236-d611-4d6c-82c9-84978c29c1a7/huXfyYdmyz.lottie"
                                  loop
                                  autoplay
                                  speed={i % 2 === 0 ? 1 : 0.8}
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                            ))}
                          </div>

                          {/* Divider */}
                          <div className="h-px bg-gray-300"></div>

                          {/* Name */}
                          <div className="text-gray-800 font-semibold text-sm md:text-base">
                            {testimonial.name}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center mt-4 gap-2 md:gap-4">
                <motion.button
                  onClick={prevSlide}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    // GPU acceleration for buttons
                    willChange: "transform",
                    transform: "translate3d(0, 0, 0)",
                  }}
                >
                  <BiChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    // GPU acceleration for buttons
                    willChange: "transform",
                    transform: "translate3d(0, 0, 0)",
                  }}
                >
                  <BiChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
