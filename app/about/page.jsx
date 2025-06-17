"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Header from "../../src/helpers/components/Header";
import Footer from "../../src/helpers/components/Footer";

// Optimized animation variants
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transform: "translate3d(0, 60px, 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    transform: "translate3d(0, 0, 0)",
  },
};

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    transform: "translate3d(-60px, 0, 0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    transform: "translate3d(0, 0, 0)",
  },
};

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    transform: "translate3d(60px, 0, 0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    transform: "translate3d(0, 0, 0)",
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transform: "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    transform: "translate3d(0, 0, 0) scale3d(1, 1, 1)",
  },
};

// Animated Section Component
const AnimatedSection = ({
  children,
  variants = fadeInUp,
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    amount: 0.3,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

// Team Member Component
const TeamMember = ({ image, name, role, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    amount: 0.5,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleIn}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col items-center"
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      <motion.div
        className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--primary-color)] mb-4 relative"
        whileHover={{
          scale: 1.05,
          borderColor: "var(--primary-color)",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          willChange: "transform, box-shadow",
          backfaceVisibility: "hidden",
        }}
      >
        <Image
          src={
            image ||
            "/about/soulseeker-creative-photography-aRQrz0fclB8-unsplash.jpg"
          }
          alt="Team Member"
          fill
          className="object-cover"
          quality={100}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
      <motion.h4
        className="font-bold text-white"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
      >
        {name}
      </motion.h4>
      <motion.p
        className="text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
      >
        {role}
      </motion.p>
    </motion.div>
  );
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Event Planner",
      image: "/about/soulseeker-creative-photography-aRQrz0fclB8-unsplash.jpg",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "/about/soulseeker-creative-photography-aRQrz0fclB8-unsplash.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Coordinator",
      image: "/about/soulseeker-creative-photography-aRQrz0fclB8-unsplash.jpg",
    },
    {
      name: "Sarah Williams",
      role: "Marketing",
      image: "/about/soulseeker-creative-photography-aRQrz0fclB8-unsplash.jpg",
    },
  ];

  return (
    <div
      className="h-auto"
      style={{
        willChange: "scroll-position",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {/* Hero Section */}
      <div className="relative w-full flex flex-col h-60 md:min-h-screen">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/banner/pablo-lancaster-jones-YvbGuitURjQ-unsplash.jpg"
            alt="Background"
            fill
            className="md:object-cover"
            quality={100}
            priority
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          />
          <div
            className="absolute hidden md:flex top-0 left-0 w-full h-full"
            style={{
              clipPath: "polygon(0 0, 40% 0, 60% 100%, 0% 100%)",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          ></div>
        </div>

        <Header />

        <main className="relative z-10 flex flex-grow justify-start items-end py-20 md:mt-0 mt-4">
          <div className="container h-fit flex items-center">
            <motion.div
              className="text-white w-full md:w-1/2 px-6 md:px-40"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
            >
              <h1 className="text-xl md:text-7xl font-bold">
                <motion.span
                  className="text-[var(--primary-color)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  ABOUT{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  US
                </motion.span>
              </h1>
            </motion.div>
          </div>

          <motion.a
            href="https://wa.me/+91700004657"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 border border-green-600 rounded-full shadow-lg bg-green-600 transition z-50 p-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.392 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.296-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </motion.a>
        </main>
      </div>

      {/* Content Section */}
      <div
        className="w-full p-8 md:p-20 h-auto space-y-10"
        style={{
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {/* About Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-center">
          <AnimatedSection variants={fadeInLeft} className="flex-1">
            <p className="text-center md:text-left montserrat text-sm md:text-base leading-relaxed">
              Kallummakkaya Events Managements, Thiruvananthapuram, Nedumangad
              is a passionate and premium event management team dedicated to
              making your celebrations unforgettable. With over 5+ years of
              experience, our expert professionals bring creativity, perfection,
              and precision to every event we plan. We are your one-stop
              destination for all kinds of events—whether it's a wedding,
              corporate event, or a personal celebration. We walk beside you,
              understanding your vision and turning your dreams into beautifully
              designed realities. At Kallummakkaya Events, we value the trust
              our clients place in us. With a professional yet friendly
              approach, we promise transparency, dedication, and heartfelt
              service in every step of your journey with us. You dream it, we
              design it. Let's create magic together!
            </p>
          </AnimatedSection>

          <AnimatedSection
            variants={fadeInRight}
            delay={0.2}
            className="flex-shrink-0"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src="/about/soulseeker-creative-photography-aRQrz0fclB8-unsplash.jpg"
                alt="Event Management"
                width={500}
                height={300}
                className="object-cover rounded-2xl shadow-lg"
                quality={100}
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              />
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Team Section */}
        <AnimatedSection className="flex h-full flex-col justify-center items-center w-full py-12">
          <div className="text-center mb-12">
            <motion.h3
              className="inline-block px-6 py-2 text-lg md:text-xl text-white font-semibold rounded-lg bg-[#2d2d2d]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              MEET OUR<span className="text-[var(--primary-color)]"> TEAM</span>
            </motion.h3>
          </div>

          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={`team-member-${index}`}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  index={index}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
