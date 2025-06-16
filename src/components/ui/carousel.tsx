"use client";
import React, { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

interface CardProps {
  src: string;
  alt?: string;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pb-[20px] [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className={cn("flex flex-row justify-start gap-4 pl-4")}>
          {items &&
            items.map((item: ReactNode, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%] shrink-0"
              >
                {item}
              </motion.div>
            ))}
        </div>
      </div>
      <div className="mr-10 flex justify-end gap-2">
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRightIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export const Card = ({ src, alt = "Carousel image" }: CardProps) => {
  return (
    <div className="relative z-10 overflow-hidden rounded-3xl border-[0.75px] border-[#616161] shadow-sm h-[420px]">
      <img
        className={cn("size-full object-cover transition duration-300 blur-0")}
        src={src}
        loading="lazy"
        decoding="async"
        alt={alt}
      />
    </div>
  );
};
