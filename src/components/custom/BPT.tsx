import { ReactNode } from "react";

export interface Props {
  children: string | ReactNode;
  textClassName?: string;
}
export default function BPT({
  children,
  textClassName = "text-[14px]",
}: Props) {
  return (
    <div className="flex gap-[5px]">
      <div className="rounded-full size-[3px] bg-black shrink-0 mt-[8px]" />
      <div className={`${textClassName}`}>{children}</div>
    </div>
  );
}
