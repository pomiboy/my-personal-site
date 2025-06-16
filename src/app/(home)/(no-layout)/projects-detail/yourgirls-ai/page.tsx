"use client";

import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";
import { Links } from "@/constants/links";
import { CaretRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import yourgirlsImage from "../../../../../../public/images/yourgirls4xx.png";
import ProjectDetailItem from "../ProjectDetailItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FrontendRoles from "./FrontendRoles";
import DesignRoles from "./DesignRoles";

export default function YourgirlsAiScreen() {
  const [pressedRole, setPressedRole] = useState<
    "frontend" | "design" | "none"
  >("none");

  return (
    <div className="h-full w-[700px] flex flex-col">
      <Image
        src={yourgirlsImage}
        width={100}
        height={100}
        alt="profile image"
        className="rounded-[25px]"
      />
      <div className="flex flex-col gap-[25px] my-[40px]">
        <p className="text-[30px] font-bold">yourgirls.ai</p>
        <p className="text-[20px] font-medium text-[#616161]">
          남성향 AI 채팅 서비스
        </p>
        <div className="flex gap-[15px]">
          <Link href={Links.YOURGIRLS_GITHUB} target="_blank">
            <div className="flex justify-center items-center rounded-full shadow-xl bg-[#202020] size-[40px] hover:opacity-80 transition duration-200">
              <GithubLogoIcon size={28} color="white" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-[27px] mt-[30px]">
          <ProjectDetailItem
            label="작업 기간"
            content="2024.07 ~ 2024.08 (개발) / 2024.09~2024.10 (운영)"
          />
          <ProjectDetailItem
            label="인력 구성"
            content="FE 1명(본인) / BE 2명"
          />
          <ProjectDetailItem label="기여율" content="40%" />
          <ProjectDetailItem
            label="사용 기술 스택"
            content="React, Next.js, TypeScript, Vercel, Tailwind CSS, localForage, Stable Diffusion"
          />
          <ProjectDetailItem
            label="프로젝트 설명"
            content="
            프로젝트 디토를 기획하기 전 피그말리온팀에서 출시 및 운영하였던 AI 채팅 서비스입니다. 각기 다른 외모, 성격, 상황을 가진
            AI 캐릭터들이 존재하며 이 중 원하는 캐릭터를 골라 자유로운 채팅을 하는 방식입니다. 채팅을 꾸준히 하면
            호감도가 상승하는 시스템가지고 있으며 호감도 상승에 따라 캐릭터가 더 솔직하고 적극적이게 됩니다. 또한 유저에게 더 많은
            사진을 보내줍니다. 채팅은 OpenAI API와 websocket을 사용하여 구현하였으며 mobile-first 서비스를 지향하여
            PWA를 적용해 운영하였습니다. 또한 Stable Diffusion을 사용해 AI 캐릭터 사진을 생성해내었습니다.
            "
          />
          <ProjectDetailItem
            label="성과"
            content={
              <div className="flex flex-col">
                <BPT textClassName="text-[16px]">
                  운영 2개월 동안&nbsp;
                  <span className="font-bold">누적 가입자 수 8,000명 달성</span>
                </BPT>
              </div>
            }
          />
          <div className="flex flex-col gap-[15px] mt-[20px]">
            <div className="text-[16px] font-semibold">수행한 역할</div>
            <div className="flex gap-[15px]">
              <GlowingBorderBox>
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() =>
                    setPressedRole(
                      pressedRole === "frontend" ? "none" : "frontend"
                    )
                  }
                >
                  <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
                    <p>프론트엔드 개발 전담</p>
                    <motion.div
                      animate={{ rotate: pressedRole === "frontend" ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CaretRightIcon size={15} />
                    </motion.div>
                  </div>
                  <p className="font-medium text-[13px]">
                    웹서비스의 첫 개발 시작부터 배포까지 그리고 이후의 운영까지
                    팀 내 유일 프론트엔드 개발자로써의 역할 수행
                  </p>
                </div>
              </GlowingBorderBox>
              <GlowingBorderBox>
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() =>
                    setPressedRole(pressedRole === "design" ? "none" : "design")
                  }
                >
                  <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
                    <p>디자인</p>
                    <motion.div
                      animate={{ rotate: pressedRole === "design" ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CaretRightIcon size={15} />
                    </motion.div>
                  </div>
                  <p className="font-medium text-[13px]">
                    웹사이트 내 모든 화면 디자인, 톤앤매너 결정, AI 이미지
                    생성의 역할 수행
                  </p>
                </div>
              </GlowingBorderBox>
            </div>
          </div>
          <div>
            <AnimatePresence mode="wait">
              {pressedRole === "frontend" && (
                <motion.div
                  key="frontend"
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <FrontendRoles />
                </motion.div>
              )}
              {pressedRole === "design" && (
                <motion.div
                  key="design"
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <DesignRoles />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
