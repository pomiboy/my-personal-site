import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ReactNode } from "react";

export interface Props {
  children: string | ReactNode;
  pointer?: boolean;
  onClick?: () => void;
}

export default function GlowingBorderBox({
  children,
  pointer = false,
  onClick,
}: Props) {
  return (
    <div
      className={`relative w-full rounded-2xl border p-3 flex flex-col shadow-sm ${
        pointer ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      {children}
    </div>
  );
}
