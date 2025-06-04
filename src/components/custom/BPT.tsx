// bullet porint text

import { DotIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";

export interface Props {
  children: string | ReactNode;
}
export default function BPT({ children }: Props) {
  return (
    <div className="flex gap-[5px]">
      <div className="rounded-full size-[3px] bg-black shrink-0 mt-[8px]" />
      <p className="text-[14px]">{children}</p>
    </div>
  );
}
