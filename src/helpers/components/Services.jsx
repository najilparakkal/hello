"use client";

import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useCallback, useMemo } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const services = [
  {
    title: "WEDDINGS",
    space: true,
    hilight: `PREMIUM`,
    description:
      "We deliver nothing lesser than perfection when it comes to creating fabulous wedding stages. Handcrafting every element of the stage inch-by-inch, we make sure you and your partner stand on a heavenly summit. The entire stage will be customized based on your tradition, ideas and requirements.",
    image: "/services/amit-kumar-ShO949vJwAg-unsplash.jpg",
  },
  {
    title: "CATERERS",
    hilight: "EVENT ",
    space: true,
    description:
      "We deliver nothing lesser than perfection when it comes to creating fabulous wedding stages. Handcrafting every element of the stage inch-by-inch, we make sure you and your partner stand on a heavenly summit. The entire stage will be customized based on your tradition, ideas and requirements.",
    image: "/services/unnamed.webp",
  },
  {
    title: "CORS",
    hilight: "DE",
    description:
      "We deliver nothing lesser than perfection when it comes to creating fabulous wedding stages. Handcrafting every element of the stage inch-by-inch, we make sure you and your partner stand on a heavenly summit. The entire stage will be customized based on your tradition, ideas and requirements.",
    image: "/services/amit-kumar-ShO949vJwAg-unsplash.jpg",
  },
  {
    title: "RENTALS",
    hilight: "PREMIUM ",
    space: true,
    description:
      "We deliver nothing lesser than perfection when it comes to creating fabulous wedding stages. Handcrafting every element of the stage inch-by-inch, we make sure you and your partner stand on a heavenly summit. The entire stage will be customized based on your tradition, ideas and requirements.",
    image: "/services/unnamed.webp",
  },
];

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==";

// Optimized animation variants for GPU acceleration
const optimizedVariants = {
  imageHidden: {
    opacity: 0,
    x: 100,
    scale: 0.8,
    rotateY: 15,
    // Force GPU acceleration
    transform: "translate3d(100px, 0, 0) scale3d(0.8, 0.8, 1) rotateY(15deg)",
  },
  imageVisible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    // Force GPU acceleration
    transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateY(0deg)",
  },
  textHidden: {
    opacity: 0,
    x: -50,
    y: 30,
    // Force GPU acceleration
    transform: "translate3d(-50px, 30px, 0)",
  },
  textVisible: {
    opacity: 1,
    x: 0,
    y: 0,
    // Force GPU acceleration
    transform: "translate3d(0, 0, 0)",
  },
};

// Memoized service item component for better performance
const ServiceItem = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion();

  // Refs
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Animation controls
  const imageControls = useAnimation();
  const textControls = useAnimation();

  // Optimized intersection observer with throttling
  const isInView = useInView(containerRef, {
    margin: "-20% 0px -20% 0px",
    amount: 0.3,
    once: false, // Allow re-triggering
  });

  // Memoized animation configs for performance
  const animationConfig = useMemo(
    () => ({
      image: {
        type: "spring",
        stiffness: shouldReduceMotion ? 200 : 100,
        damping: shouldReduceMotion ? 30 : 20,
        mass: 0.8,
        velocity: 0,
      },
      text: {
        type: "spring",
        stiffness: shouldReduceMotion ? 200 : 120,
        damping: shouldReduceMotion ? 30 : 25,
        mass: 0.6,
      },
    }),
    [shouldReduceMotion]
  );

  // Optimized animation trigger with useCallback
  const triggerAnimations = useCallback(async () => {
    if (isInView) {
      // Start animations simultaneously for better performance
      await Promise.all([
        textControls.start({
          ...optimizedVariants.textVisible,
          transition: { ...animationConfig.text, delay: 0.1 },
        }),
        imageControls.start({
          ...optimizedVariants.imageVisible,
          transition: { ...animationConfig.image, delay: 0.2 },
        }),
      ]);
    } else {
      // Exit animations
      await Promise.all([
        textControls.start({
          ...optimizedVariants.textHidden,
          transition: { ...animationConfig.text, duration: 0.4 },
        }),
        imageControls.start({
          ...optimizedVariants.imageHidden,
          transition: { ...animationConfig.image, duration: 0.4 },
        }),
      ]);
    }
  }, [isInView, textControls, imageControls, animationConfig]);

  useEffect(() => {
    triggerAnimations();
  }, [triggerAnimations]);

  return (
    <div
    id="services"
      ref={containerRef}
      className={`flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } w-full gap-6 md:gap-8 mb-12 md:mb-16`}
      style={{
        // Force hardware acceleration on container
        willChange: "transform",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {/* Text Content */}
      <motion.div
        ref={textRef}
        initial={optimizedVariants.textHidden}
        animate={textControls}
        className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 md:px-8 order-2 md:order-none"
        style={{
          // Force GPU acceleration
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          perspective: 1000,
        }}
      >
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="flex flex-wrap justify-center md:justify-start mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary-color)]">
              {service.hilight}
            </h2>
            {service.space && <span className="w-2 md:w-4"></span>}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              {service.title}
            </h2>
          </div>

          <div className="flex -space-x-2 my-3 md:my-4 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                style={{
                  willChange: "transform",
                  transform: "translate3d(0, 0, 0)",
                }}
              >
                <DotLottieReact
                  src="https://lottie.host/b6eb3236-d611-4d6c-82c9-84978c29c1a7/huXfyYdmyz.lottie"
                  loop
                  autoplay
                  speed={i % 2 === 0 ? 1 : 0.8}
                  style={{ width: "18px", height: "18px" }}
                />
              </div>
            ))}
          </div>

          <p className="text-xs montserrat md:text-sm lg:text-base text-white text-center md:text-left leading-relaxed font-light">
            {service.description}
          </p>
        </div>
      </motion.div>

      {/* Image Container */}
      <motion.div
        ref={imageRef}
        initial={
          isEven
            ? optimizedVariants.imageHidden
            : { ...optimizedVariants.imageHidden, x: -100 }
        }
        animate={imageControls}
        className={`w-full md:w-1/2 h-[250px] md:h-[350px] lg:h-[400px] relative overflow-hidden order-1 md:order-none ${
          isEven
            ? "rounded-l-3xl md:rounded-l-full rounded-r-3xl md:rounded-r-none"
            : "rounded-r-3xl md:rounded-r-full rounded-l-3xl md:rounded-l-none"
        }`}
        style={{
          // Critical for smooth animations
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div
          className="w-full h-full relative"
          style={{
            willChange: "transform",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
            quality={90}
            priority={index < 2}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              // Optimize image rendering
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <div
      className="w-full py-8 md:py-14 bg-black overflow-hidden"
      style={{
        // Optimize container
        willChange: "scroll-position",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="flex justify-center items-center mb-8 md:mb-14 px-4"
      >
        <div className="px-6 md:px-8 py-3 bg-[#2D2D2D] text-white rounded-lg font-semibold text-sm md:text-base shadow-lg">
          OUR <span className=" text-[var(--primary-color)]">SERVICES</span>
        </div>
      </motion.div>

      {/* Services List */}
      <div className="w-full">
        {services.map((service, index) => (
          <ServiceItem
            key={`service-${index}`}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
