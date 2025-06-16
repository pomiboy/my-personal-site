"use client";

import GlowingBorderBox from "@/components/custom/GlowingBorderBox";
import { Links } from "@/constants/links";
import { CaretRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import pirotImage from "../../../../../../public/images/pirot.png";
import ProjectDetailItem from "../ProjectDetailItem";
import { Carousel, Card } from "@/components/ui/carousel";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CPT from "@/components/custom/CPT";
import Divider from "@/components/custom/Divider";
import FrontendRoles from "./FrontendRoles";
import DesignRoles from "./DesignRoles";

export default function PirotScreen() {
  const [pressedRole, setPressedRole] = useState<
    "frontend" | "design" | "none"
  >("none");

  const carouselImages = [
    "/images/pirot/pr1.png",
    "/images/pirot/pr2.png",
    "/images/pirot/pr3.png",
    "/images/pirot/pr4.png",
  ];

  const cards = carouselImages.map((imagePath, index) => (
    <Card key={index} src={imagePath} alt={`Image ${index + 1}`} />
  ));

  return (
    <div className="h-full w-[700px] flex flex-col">
      <Image
        src={pirotImage}
        width={100}
        height={100}
        alt="profile image"
        className="rounded-[25px] shadow-sm"
      />
      <div className="flex flex-col gap-[25px] my-[40px]">
        <p className="text-[30px] font-bold">피롯 (Pirot)</p>
        <p className="text-[20px] font-medium text-[#616161]">
          개발 동아리를 위한 커뮤니케이션 솔루션
        </p>
        <div className="flex gap-[15px]">
          <Link href={Links.PIROT_GITHUB} target="_blank">
            <div className="flex justify-center items-center rounded-full shadow-xl bg-[#202020] size-[40px] hover:opacity-80 transition duration-200">
              <GithubLogoIcon size={28} color="white" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-[27px] mt-[30px]">
          <ProjectDetailItem label="작업 기간" content="2023.08 (1개월)" />
          <ProjectDetailItem
            label="인력 구성"
            content="FE 1명(본인) / BE 3명"
          />
          <ProjectDetailItem label="기여율" content="40%" />
          <ProjectDetailItem
            label="사용 기술 스택"
            content="JavaScript(Vanilla), Figma"
          />
          <ProjectDetailItem
            label="프로젝트 설명"
            content="개발 동아리를 위한 최적의 커뮤니케이션 채팅 서비스입니다. 본래 피로그래밍 동아리에서는 카카오톡을 커뮤니케이션 수단으로 사용하고 있었으나
            여러 불편함들이 존재했습니다. 예를 들어 코드를 공유하고 싶은데 카카오톡으로 보내면 그 레이아웃이 깨진다던지, 공지 메시지가 다른 메시지들이 쌓임으로 인해 뭍힌다던지,
            여러 동아리의 단톡방이 한 서비스에 혼재되어있다던지 등의 문제들을 맞닥뜨렸습니다. 이를 해결하고자 개발된 서비스입니다."
          />
          <ProjectDetailItem
            label="제공 기능"
            content={
              <div className="flex flex-col gap-[5px]">
                <CPT textClassName="text-[16px]">코드 스니펫 전송</CPT>
                <CPT textClassName="text-[16px]">마크다운 문법 채팅 지원</CPT>
                <CPT textClassName="text-[16px]">
                  Visual Studio Code 코드 입력창 지원
                </CPT>
                <CPT textClassName="text-[16px]">이미지 전송 및 저장</CPT>
                <Divider margin="my-[10px]" />
                <CPT textClassName="text-[16px]">
                  단체 채팅방, 익명 채팅방, 개인 채팅방 개설 및 초대, 퇴장
                </CPT>
                <CPT textClassName="text-[16px]">
                  익명 채팅방 프로필 익명성 강화
                </CPT>
                <CPT textClassName="text-[16px]">
                  채팅방 별 게시글 작성 및 공감
                </CPT>
                <CPT textClassName="text-[16px]">채팅방 입력창 잠금</CPT>
                <Divider margin="my-[10px]" />
                <CPT textClassName="text-[16px]">채널 개설 및 관리</CPT>
                <CPT textClassName="text-[16px]">채널 기본 프로필 지정</CPT>
                <CPT textClassName="text-[16px]">채널 운영진 권한 관리</CPT>
                <CPT textClassName="text-[16px]">채널 구성원 퇴출</CPT>
                <CPT textClassName="text-[16px]">
                  라이트 모드, 다크 모드, Black & White 모드
                </CPT>
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
                    <p>프론트엔드 개발</p>
                    <motion.div
                      animate={{ rotate: pressedRole === "frontend" ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CaretRightIcon size={15} />
                    </motion.div>
                  </div>
                  <p className="font-medium text-[13px]">
                    프론트엔드 개발 역할 전담
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
                    웹서비스 내 UI/UX 기획 및 디자인
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
