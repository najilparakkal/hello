"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


const CountUp = ({
  from,
  to,
  duration = 2,
  separator = "",
  direction = "up",
  className = "",
}) => {
  const [count, setCount] = useState(from);
  const requestRef = useRef();
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (from === to) {
      setCount(to);
      return;
    }

    const animateCount = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / (duration * 1000),
        1
      );

      const easedProgress = easeOutQuad(progress);
      const currentCount = direction === "up" 
        ? Math.floor(from + (to - from) * easedProgress)
        : Math.floor(from - (from - to) * easedProgress);

      setCount(currentCount);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animateCount);
      }
    };

    requestRef.current = requestAnimationFrame(animateCount);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [from, to, duration, direction]);

  // Easing function for smooth animation
  const easeOutQuad = (t) => {
    return t * (2 - t);
  };

  return (
    <motion.span className={className}>
      {separator ? count.toLocaleString() : count}
    </motion.span>
  );
};

export default CountUp;