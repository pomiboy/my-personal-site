"use client";

import {
  AtIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { CustomTooltip } from "./Tooltip";
import { Links } from "../../constants/links";
import { toast } from "sonner";

export default function IconRow() {
  const handleCopy = async (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      toast.success("Copied!");
    } catch (error) {
      console.log(error);
      toast.error("Copy failed.");
    }
  };
  return (
    <div className="flex gap-[25px]">
      <CustomTooltip
        trigger={
          <Link href={Links.LINKEDIN} target="_blank">
            <div className="hover:text-[#007ebc] duration-100 cursor-pointer">
              <LinkedinLogoIcon size={28} weight="bold" />
            </div>
          </Link>
        }
        content={"LinkedIn"}
      />
      <CustomTooltip
        trigger={
          <Link href={Links.GITHUB} target="_blank">
            <div className="hover:text-[#616161] duration-100 cursor-pointer">
              <GithubLogoIcon size={28} weight="bold" />
            </div>
          </Link>
        }
        content={"Github"}
      />
      <CustomTooltip
        trigger={
          <Link href={Links.INSTAGRAM} target="_blank">
            <div className="hover:text-[#e8514f] duration-100 cursor-pointer">
              <InstagramLogoIcon size={28} weight="bold" />
            </div>
          </Link>
        }
        content={"Instagram"}
      />
      <CustomTooltip
        trigger={
          <div
            className="hover:text-[#38be26] duration-100 cursor-pointer"
            onClick={() => handleCopy("01029732165")}
          >
            <PhoneIcon size={28} weight="bold" />
          </div>
        }
        content={"010.2973.2165"}
      />
      <CustomTooltip
        trigger={
          <div
            className="hover:text-[#2b3ae2] duration-100 cursor-pointer"
            onClick={() => handleCopy("daniel231963@naver.com")}
          >
            <AtIcon size={28} weight="bold" />
          </div>
        }
        content={"daniel231963@naver.com"}
      />
    </div>
  );
}
