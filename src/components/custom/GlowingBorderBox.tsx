import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{
        scale: pointer ? 1.025 : 1,
      }}
      whileTap={{
        scale: pointer ? 0.975 : 1,
      }}
      className="w-full"
    >
      <div
        className={`relative w-full h-full rounded-2xl border p-3 flex flex-col shadow-sm ${
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
    </motion.div>
  );
}
