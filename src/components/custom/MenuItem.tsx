"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface Props {
  title: string;
  slug: string;
}

const defaultStyle =
  "hover:bg-gray-100 bg-white text-black transition duration-200";
const pressedStyle = "bg-black text-white";

export function MenuItem({ title, slug }: Props) {
  const pathName = usePathname();
  const isPressed = useMemo(() => {
    return pathName === `/${slug}`;
  }, [pathName, slug]);
  return (
    <Link href={`/${slug}`}>
      <p
        className={`${
          isPressed ? pressedStyle : defaultStyle
        } flex w-fit justify-center items-center px-[10px] py-[2px] rounded-[10px] text-[15px] cursor-pointer`}
      >
        {title}
      </p>
    </Link>
  );
}
