"use client";

import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { CustomTooltip } from "./Tooltip";

export default function IconRow() {
  return (
    <div className="flex gap-[25px]">
      <CustomTooltip
        trigger={
          <div className="hover:text-[#007ebc] duration-100 cursor-pointer">
            <LinkedinLogoIcon size={28} weight="bold" />
          </div>
        }
        content={"LinkedIn"}
      />
      <CustomTooltip
        trigger={
          <div className="hover:text-[#616161] duration-100 cursor-pointer">
            <GithubLogoIcon size={28} weight="bold" />
          </div>
        }
        content={"Github"}
      />
      <CustomTooltip
        trigger={
          <div className="hover:text-[#e8514f] duration-100 cursor-pointer">
            <InstagramLogoIcon size={28} weight="bold" />
          </div>
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
