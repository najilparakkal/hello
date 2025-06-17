"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "./CountUp";

export default function LandingSecond() {
  const [yearCount, setYearCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });



  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const image1Opacity = useTransform(
    scrollYProgress,
    [0, 0.5], 
    [1, 1]
  );
  const image2Opacity = useTransform(
    scrollYProgress,
    [1, 0.5],
    [1, 1]
  );

  useEffect(() => {
    if (!inView || hasAnimated) return;

    controls.start({ opacity: 1, y: 0 });

    const targets = {
      years: 11,
      events: 101,
      clients: 151,
      rating: 151,
    };

    let current = {
      years: 0,
      events: 0,
      clients: 0,
      rating: 0,
    };

    let animationFrameId;
    const duration = 1500;
    let startTime = null;

    const lerp = (start, end, t) => start + (end - start) * t;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      current.years = lerp(current.years, targets.years, 0.15);
      current.events = lerp(current.events, targets.events, 0.15);
      current.clients = lerp(current.clients, targets.clients, 0.15);
      current.rating = lerp(current.rating, targets.rating, 0.15);

      setYearCount(Math.floor(current.years * progress));
      setEventCount(Math.floor(current.events * progress));
      setClientCount(Math.floor(current.clients * progress));
      setRatingCount(Math.floor(current.rating * progress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, hasAnimated]);

  return (
    <div ref={ref} className="p-5 w-full">
      <motion.div className="flex justify-center w-full">
        <div className="flex justify-between md:w-2/3 w-full gap-4 md:py-10 py-5 items-center">
          {[
            { count: yearCount, label: "Year's of Experience" },
            { count: eventCount, label: "Events Covered" },
            { count: clientCount, label: "Satisfied Clients" },
            { count: ratingCount, label: "Customer Rating" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center flex-col space-y-2"
            >
              <motion.h1 className="md:text-7xl text-xl montserrat text-[var(--primary-color)]">
                <CountUp
                  from={0}
                  to={item.count}
                  duration={2}
                  separator=""
                  direction="up"
                />
                +
              </motion.h1>
              <h6 className="md:text-md text-xs text-center">{item.label}</h6>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Transition Section */}
      <div
        ref={containerRef}
        className="relative gap-6 space-y-5"
        style={{
          height: "calc(100vh + 600px)", // Ample scroll space
          marginBottom: "10px", // Prevents cutoff
        }}
      >
        {/* First Image */}
        <motion.div
          style={{ opacity: image1Opacity }}
          className="w-full h-[70vh] pb-6 rounded-4xl sticky top-20"
        >
          <Image
            src="/banner/pablo-lancaster-jones-YvbGuitURjQ-unsplash.jpg"
            alt="Background 1"
            fill
            className="object-cover rounded-4xl"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          style={{ opacity: image2Opacity }}
          className="w-full h-[70vh] pb-6 rounded-4xl sticky top-20"
        >
          <Image
            src="/services/amit-kumar-ShO949vJwAg-unsplash.jpg"
            alt="Background 2"
            fill
            className="object-cover rounded-4xl"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .sticky {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        .rounded-4xl {
          overflow: hidden;
          transition: opacity 0.8s cubic-bezier(0.33, 1, 0.68, 1);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
