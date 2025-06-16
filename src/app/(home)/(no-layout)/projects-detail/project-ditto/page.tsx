"use client";

import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";
import { Links } from "@/constants/links";
import {
  AppStoreLogoIcon,
  CaretRightIcon,
  GithubLogoIcon,
  GooglePlayLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import projectDittoImage from "../../../../../../public/images/project-ditto.png";
import ProjectDetailItem from "../ProjectDetailItem";
import { Carousel, Card } from "@/components/ui/carousel";
import FrontendRoles from "./FrontendRoles";
import DesignRoles from "./DesignRoles";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDittoScreen() {
  const [pressedRole, setPressedRole] = useState<
    "frontend" | "design" | "none"
  >("none");

  const carouselImages = [
    "/images/project-ditto/pd1.png",
    "/images/project-ditto/pd2.png",
    "/images/project-ditto/pd3.png",
    "/images/project-ditto/pd4.png",
    "/images/project-ditto/pd5.png",
    "/images/project-ditto/pd6.PNG",
  ];

  const cards = carouselImages.map((imagePath, index) => (
    <Card key={index} src={imagePath} alt={`Image ${index + 1}`} />
  ));

  return (
    <div className="h-full w-[700px] flex flex-col">
      <Image
        src={projectDittoImage}
        width={100}
        height={100}
        alt="profile image"
        className="rounded-[25px] shadow-sm"
      />
      <div className="flex flex-col gap-[25px] my-[40px]">
        <p className="text-[30px] font-bold">프로젝트 디토</p>
        <p className="text-[20px] font-medium text-[#616161]">
          30일 간 편지로 소통하는 AI 컴패니언 앱 서비스
        </p>
        <div className="flex gap-[15px]">
          <Link href={Links.DITTO_APP_STORE} target="_blank">
            <div className="flex justify-center items-center shadow-xl rounded-full bg-[#2091eb] size-[40px] hover:opacity-80 transition duration-200">
              <AppStoreLogoIcon size={28} color="white" />
            </div>
          </Link>
          <Link href={Links.DITTO_PLAY_STORE} target="_blank">
            <div className="flex justify-center items-center rounded-full shadow-xl bg-[#31a350] size-[40px] hover:opacity-80 transition duration-200">
              <GooglePlayLogoIcon size={28} color="white" />
            </div>
          </Link>
          <Link href={Links.DITTO_GITHUB} target="_blank">
            <div className="flex justify-center items-center rounded-full shadow-xl bg-[#202020] size-[40px] hover:opacity-80 transition duration-200">
              <GithubLogoIcon size={28} color="white" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-[27px] mt-[30px]">
          <ProjectDetailItem
            label="작업 기간"
            content="2024.11 ~ 2024.12 (1.5개월)"
          />
          <ProjectDetailItem
            label="인력 구성"
            content="FE 1명(본인) / BE 1명"
          />
          <ProjectDetailItem label="기여율" content="50%" />
          <ProjectDetailItem
            label="사용 기술 스택"
            content="React Native, TypeScript, Expo, Tanstack Query, Sentry, Codemagic, Flux"
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
                  2025.03 기준&nbsp;
                  <span className="font-bold">
                    누적 가입자 수 10,000명, DAU 1,500명 달성
                  </span>
                </BPT>
                <BPT textClassName="text-[16px]">
                  2025.02 기준 앱스토어 롤플레잉 게임 카테고리&nbsp;
                  <span className="font-bold">차트 25위 기록</span>
                </BPT>
                <BPT textClassName="text-[16px]">
                  앱스토어, 플레이스토어&nbsp;
                  <span className="font-bold">
                    총 250+ 개의 리뷰 및 각각 별점 4.8, 4.7 기록 중
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
                  setPressedRole(
                    pressedRole === "frontend" ? "none" : "frontend"
                  )
                }
              >
                <div className="flex flex-col">
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
                    어플리케이션의 첫 개발 시작부터 배포까지 그리고 이후의
                    운영까지 팀 내 유일 프론트엔드 개발자로써의 역할 수행
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
                    앱 내 모든 화면 디자인, 톤앤매너 결정, 자체 디자인 시스템
                    구축, AI 이미지 생성의 역할 수행
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
