"use client";

import React, {
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SlideTabs() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-fit gap-3"
    >
      <Tab setPosition={setPosition} slug="projects">
        Projects
      </Tab>
      <Tab setPosition={setPosition} slug="activities">
        Activities
      </Tab>
      <Tab setPosition={setPosition} slug="resume">
        Resume
      </Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  slug,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  slug: string;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);
  const pathName = usePathname();
  const isPressed = useMemo(() => {
    return pathName === `/${slug}`;
  }, [pathName, slug]);

  return (
    <Link href={`/${slug}`}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className={`relative z-10 block cursor-pointer px-[10px] py-[2px] rounded-[10px] text-[15px] ${
          isPressed ? "text-white" : "text-black"
        } transition duration-200`}
      >
        {children}
        {isPressed && (
          <div className="absolute bg-black h-[28px] inset-0 -z-10 rounded-[10px]" />
        )}
      </li>
    </Link>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-[28px] rounded-[10px] bg-gray-200"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
