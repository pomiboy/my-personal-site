"use client";

import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";
import { Links } from "@/constants/links";
import {
  AppStoreLogoIcon,
  CaretRightIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import piroImage from "../../../../../../public/images/piro.png";
import ProjectDetailItem from "../ProjectDetailItem";
import { Carousel, Card } from "@/components/ui/carousel";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeaderRoles from "./LeaderRoles";
import FrontendRoles from "./FrontendRoles";
import DesignRoles from "./DesignRoles";

export default function PiroAppScreen() {
  const [pressedRole, setPressedRole] = useState<
    "leader" | "frontend" | "design" | "none"
  >("none");

  const carouselImages = [
    "/images/piro-app/pa1.png",
    "/images/piro-app/pa2.png",
    "/images/piro-app/pa3.png",
    "/images/piro-app/pa4.png",
    "/images/piro-app/pa5.png",
  ];

  const cards = carouselImages.map((imagePath, index) => (
    <Card key={index} src={imagePath} alt={`Image ${index + 1}`} />
  ));

  return (
    <div className="h-full w-[700px] flex flex-col">
      <Image
        src={piroImage}
        width={100}
        height={100}
        alt="profile image"
        className="rounded-[25px] shadow-sm"
      />
      <div className="flex flex-col gap-[25px] my-[40px]">
        <p className="text-[30px] font-bold">피로그래밍 공식 어플리케이션</p>
        <p className="text-[20px] font-medium text-[#616161]">
          대학생 연합 웹개발 동아리 피로그래밍의 운영을 위한 어플리케이션
        </p>
        <div className="flex gap-[15px]">
          <Link href={Links.PIROAPP_APPSTORE} target="_blank">
            <div className="flex justify-center items-center shadow-xl rounded-full bg-[#2091eb] size-[40px] hover:opacity-80 transition duration-200">
              <AppStoreLogoIcon size={28} color="white" />
            </div>
          </Link>
          <Link href={Links.PIROAPP_GITHUB} target="_blank">
            <div className="flex justify-center items-center rounded-full shadow-xl bg-[#202020] size-[40px] hover:opacity-80 transition duration-200">
              <GithubLogoIcon size={28} color="white" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-[27px] mt-[30px]">
          <ProjectDetailItem label="작업 기간" content="2023.10 ~ 2023.12" />
          <ProjectDetailItem
            label="인력 구성"
            content="FE 2명(본인) / BE 3명"
          />
          <ProjectDetailItem label="기여율" content="40%" />
          <ProjectDetailItem
            label="사용 기술 스택"
            content="React Native, TypeScript, Expo, Style-Components, Figma"
          />
          <ProjectDetailItem
            label="프로젝트 설명"
            content="AI 컴패니언 시장은 Character.ai, Zeta, 뤼튼, 러비더비 등 다양한 서비스의 등장으로 빠르게 성장하고 있습니다. 이에 맞춰, 편지라는 포맷을 활용해 유저에게 공감과 위로를 전하는 '프로젝트 디토'를 기획·출시했습니다. 사용자는 사전 조사된 성향에 따라 AI 캐릭터와 30일간 매일 한 통의 편지를 주고받으며 진정성 있는 소통을 경험할 수 있습니다. 편지는 매일 새로운 AI 프롬프트로 생성되며, 현재 Claude 3.5 sonnet과 OpenAI o1  모델을 적용해 실제 사람과 유사한 공감형 답장을 제공합니다. 또한 Flux 모델로 캐릭터 이미지를 실제 인물에 가깝게 구현했습니다."
          />
          <ProjectDetailItem
            label="성과"
            content={
              <div className="flex flex-col">
                <BPT textClassName="text-[16px]">
                  출석코드 기반 출석체크, 실시간 보증금 확인 등 핵심 기능 설계
                  및 구현으로 운영진과 신입부원 모두의&nbsp;
                  <span className="font-bold">
                    동아리 활동 효율 및 편의성 대폭 개선
                  </span>
                </BPT>
                <BPT textClassName="text-[16px]">
                  2024 상반기, 하반기 신입부원 63명 대상으로 실사용 진행,&nbsp;
                  <span className="font-bold">
                    “매우 편리하다” 등 긍정적 피드백 획득
                  </span>
                </BPT>
              </div>
            }
          />
          <div className="flex flex-col gap-[15px] mt-[20px]">
            <div className="text-[16px] font-semibold">수행한 역할</div>
            <div className="flex gap-[15px]">
              <GlowingBorderBox
                pointer
                onClick={() =>
                  setPressedRole(pressedRole === "leader" ? "none" : "leader")
                }
              >
                <div className="flex flex-col">
                  <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
                    <p>팀장</p>
                    <motion.div
                      animate={{ rotate: pressedRole === "leader" ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CaretRightIcon size={15} />
                    </motion.div>
                  </div>
                  <p className="font-medium text-[13px]">
                    팀장으로서 역할 수행
                  </p>
                </div>
              </GlowingBorderBox>
              <GlowingBorderBox
                pointer
                onClick={() =>
                  setPressedRole(
                    pressedRole === "frontend" ? "none" : "frontend"
                  )
                }
              >
                <div className="flex flex-col">
                  <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
                    <p>프론트엔드 개발</p>
                    <motion.div
                      animate={{ rotate: pressedRole === "frontend" ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CaretRightIcon size={15} />
                    </motion.div>
                  </div>
                  <p className="font-medium text-[13px]">
                    프론트엔드 개발 역할 수행
                  </p>
                </div>
              </GlowingBorderBox>
              <GlowingBorderBox
                pointer
                onClick={() =>
                  setPressedRole(pressedRole === "design" ? "none" : "design")
                }
              >
                <div className="flex flex-col">
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
                    앱 내 UI/UX 기획 및 디자인
                  </p>
                </div>
              </GlowingBorderBox>
            </div>
          </div>
          <div>
            <AnimatePresence mode="wait">
              {pressedRole === "leader" && (
                <motion.div
                  key="leader"
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <LeaderRoles />
                </motion.div>
              )}
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
                  style={{ overflow: "hidden" }}
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
                  style={{ overflow: "hidden" }}
                >
                  <DesignRoles />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-[15px] mt-[20px]">
            <div className="text-[16px] font-semibold">상세 화면</div>
            <div>
              <Carousel items={cards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
