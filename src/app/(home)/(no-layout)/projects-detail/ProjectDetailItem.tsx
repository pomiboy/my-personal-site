import { ReactNode } from "react";

export interface Props {
  label: string;
  content: string | ReactNode;
}

export default function ProjectDetailItem({ label, content }: Props) {
  return (
    <div className="flex text-[16px]">
      <div className="basis-[120px] font-semibold flex items-start">
        {label}
      </div>
      <div className="flex-1">{content}</div>
    </div>
  );
}
