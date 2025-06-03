"use client";

import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { CustomTooltip } from "./Tooltip";
import { Links } from "../../constants/links";

export default function IconRow() {
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
          <div className="hover:text-[#38be26] duration-100">
            <PhoneIcon size={28} weight="bold" />
          </div>
        }
        content={"010.2973.2165"}
      />
    </div>
  );
}
