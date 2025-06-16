"use client";

import { CheckSquareIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";

export interface Props {
  children: string | ReactNode;
  textClassName?: string;
}

export default function CPT({ children, textClassName }: Props) {
  return (
    <div className="flex gap-[5px]">
      <CheckSquareIcon
        size={23}
        weight="fill"
        color="#00c817"
        className="shrink-0 relative top-[1px]"
      />
      <p className={`${textClassName}`}>{children}</p>
    </div>
  );
}
