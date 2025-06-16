import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";
import { CaretRightIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AiImageRole from "./AiImageRole";
import DesignSystemRole from "./DesignSystemRole";

export default function DesignRoles() {
  const [pressedDesignRole, setPressedDesignRole] = useState<
    "design-system" | "ai-image" | "none"
  >("none");

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-4">
        <GlowingBorderBox>
          <div className="flex flex-col">
            <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
              <p>앱 디자인</p>
            </div>
            <div className="font-medium text-[13px]">
              <BPT textClassName="font-medium text-[13px]">
                여러 레퍼런스를 찾아보며 &apos;공감&apos;이라는 서비스의 핵심
                소재를 효과적으로 나타낼 수 있는 톤앤매너를 결정하고자 함
              </BPT>
              <BPT textClassName="font-medium text-[13px]">
                <LinkWithIcon
                  text="동감"
                  link="https://namu.wiki/w/%EB%8F%99%EA%B0%90(2022)"
                  textClassName="font-medium text-[13px]"
                />
                &nbsp;
                <span>
                  이라는 영화를 최종적으로 벤치마킹하여 푸른색과 선분홍색을
                  서비스의 Accent Color로 결정
                </span>
              </BPT>
              <BPT textClassName="font-medium text-[13px]">
                <LinkWithIcon
                  text="Midjourney"
                  link="https://www.midjourney.com/home"
                  textClassName="font-medium text-[13px]"
                />
                &nbsp;를 활용하여 앱 아이콘 제작
              </BPT>
              <BPT textClassName="font-medium text-[13px]">
                Figma를 사용하여 모든 디자인 진행
              </BPT>
            </div>
          </div>
        </GlowingBorderBox>
        <GlowingBorderBox
          pointer
          onClick={() =>
            setPressedDesignRole(
              pressedDesignRole === "design-system" ? "none" : "design-system"
            )
          }
        >
          <div className="flex flex-col">
            <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
              <p>디자인 시스템 구축</p>
              <motion.div
                animate={{
                  rotate: pressedDesignRole === "design-system" ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <CaretRightIcon size={15} />
              </motion.div>
            </div>
            <p className="font-medium text-[13px]">
              Figma를 활용하여 Atomic Design 기반의 자체 디자인 시스템 구축
            </p>
          </div>
        </GlowingBorderBox>
        <GlowingBorderBox
          pointer
          onClick={() =>
            setPressedDesignRole(
              pressedDesignRole === "ai-image" ? "none" : "ai-image"
            )
          }
        >
          <div className="flex flex-col">
            <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
              <p>AI 이미지 생성</p>
              <motion.div
                animate={{
                  rotate: pressedDesignRole === "ai-image" ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <CaretRightIcon size={15} />
              </motion.div>
            </div>
            <p className="font-medium text-[13px]">
              Flux(AI 이미지 생성 모델)을 사용하여 서비스에 필요한 AI 이미지들
              생성
            </p>
          </div>
        </GlowingBorderBox>
      </div>
      <div>
        <AnimatePresence mode="wait">
          {pressedDesignRole === "design-system" && (
            <motion.div
              key="design-system"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <DesignSystemRole />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {pressedDesignRole === "ai-image" && (
            <motion.div
              key="ai-image"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <AiImageRole />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
