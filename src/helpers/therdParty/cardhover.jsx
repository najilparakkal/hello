"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { cn } from "../../../lib/utils";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Convert string array to object array for consistency
  const processedItems = items.map((item, index) => {
    if (typeof item === "string") {
      return { image: item, alt: `Menu item ${index + 1}` };
    }
    return item;
  });

  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 md:grid-cols-4 gap-3 md:gap-8",
        className
      )}
    >
      {processedItems.map((item, idx) => (
        <motion.div
          key={item?.image || idx}
          className="flex flex-col items-center relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={false}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div className="relative group cursor-pointer w-full">
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute -inset-2 bg-[var(--primary-color)]/20 rounded-lg blur-sm"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>

            <motion.div 
              className="w-full aspect-square md:aspect-[3/4] overflow-hidden border-2 border-[var(--primary-color)] rounded-lg mb-4 relative"
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.alt || "Menu item"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={90}
                priority={idx < 4} // Only prioritize first 4 images
              />
              
              <motion.div 
                className="absolute inset-0 bg-black/0"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};