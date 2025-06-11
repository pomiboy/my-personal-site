import { LinkIcon } from "@phosphor-icons/react";
import Link from "next/link";

export interface Props {
  text: string;
  link: string;
  textClassName?: string;
}

export default function LinkWithIcon({
  text,
  link,
  textClassName = "text-[14px]",
}: Props) {
  return (
    <Link href={link} target="_blank" className="inline-block">
      <div className="flex gap-[5px] w-fit relative hover:text-blue-500 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
        <span className={textClassName}>{text}</span>
        <LinkIcon size={12} className="relative top-1" />
      </div>
    </Link>
  );
}
