"use client";

import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import TiltCard from "@/components/custom/TiltCard";
import projectDittoImage from "../../../../../public/images/project-ditto.png";
import yourgirlsImage from "../../../../../public/images/yourgirlsai.png";
import piroImage from "../../../../../public/images/piro.png";
import pirotImage from "../../../../../public/images/pirot.png";
import ianImage from "../../../../../public/images/ian.png";
import piroAppImage from "../../../../../public/images/piroApp.png";
import pirotScreenImage from "../../../../../public/images/pirotScreen.png";
import yourgirls4xImage from "../../../../../public/images/yourgirls4xx.png";
import Link from "next/link";

export default function ProjectsScreen() {
  return (
    <div className="flex flex-col gap-[30px] mt-[30px]">
      <TiltCard>
        <Card className="relative overflow-hidden">
          <div className="px-[25px]">
            <Image
              src={projectDittoImage}
              width={45}
              height={45}
              alt="project ditto"
              className="rounded-[10px]"
            />
            <div className="mt-[25px] mb-[15px] text-[16px] font-bold">
              프로젝트 디토
            </div>
            <div className="text-[15px] font-medium text-[#616161]">
              30일간 편지로 소통하는 AI 컴패니언 서비스
            </div>
            <Link href="/projects-detail/project-ditto">
              <div className="relative mt-[30px] text-[14px] flex gap-[5px] items-center w-fit rounded-[5px] cursor-pointer group  py-[2px]">
                <div
                  className="absolute inset-y-0 inset-x-[-9] bg-gray-100 rounded-[5px] opacity-0 transition duration-200 group-hover:opacity-100 pointer-events-none z-0 w-[110px]"
                  aria-hidden="true"
                />
                <p className="relative z-10">프로젝트 보기</p>
                <span className="relative z-10">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image src={ianImage} width={254} height={243} alt="ian" />
          </div>
        </Card>
      </TiltCard>
      <TiltCard>
        <Card className="relative overflow-hidden">
          <div className="px-[25px]">
            <Image
              src={yourgirlsImage}
              width={45}
              height={45}
              alt="yourgirls.ai"
              className="rounded-[10px]"
            />
            <div className="mt-[25px] mb-[15px] text-[16px] font-bold">
              yourgirls.ai
            </div>
            <div className="text-[15px] font-medium text-[#616161]">
              남성향 AI 캐릭터 채팅 서비스
            </div>
            <Link href="/projects-detail/yourgirls-ai">
              <div className="relative mt-[30px] text-[14px] flex gap-[5px] items-center w-fit rounded-[5px] cursor-pointer group  py-[2px]">
                <div
                  className="absolute inset-y-0 inset-x-[-9] bg-gray-100 rounded-[5px] opacity-0 transition duration-200 group-hover:opacity-100 pointer-events-none z-0 w-[110px]"
                  aria-hidden="true"
                />
                <p className="relative z-10">프로젝트 보기</p>
                <span className="relative z-10">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          </div>
          <div className="absolute right-[-20] bottom-[-60]">
            <Image
              src={yourgirls4xImage}
              width={300}
              height={230}
              alt="yourgirls4x"
            />
          </div>
        </Card>
      </TiltCard>
      <TiltCard>
        <Card className="relative">
          <div className="px-[25px]">
            <Image
              src={piroImage}
              width={45}
              height={45}
              alt="pirogramming application"
              className="rounded-[10px]"
            />
            <div className="mt-[25px] mb-[15px] text-[16px] font-bold">
              피로그래밍 공식 어플리케이션
            </div>
            <div className="text-[15px] font-medium text-[#616161]">
              대학생 연합 웹개발 동아리 피로그래밍의 운영을 위한 어플리케이션
            </div>
            <Link href="/projects-detail/piro-app">
              <div className="relative mt-[30px] text-[14px] flex gap-[5px] items-center w-fit rounded-[5px] cursor-pointer group  py-[2px]">
                <div
                  className="absolute inset-y-0 inset-x-[-9] bg-gray-100 rounded-[5px] opacity-0 transition duration-200 group-hover:opacity-100 pointer-events-none z-0 w-[110px]"
                  aria-hidden="true"
                />
                <p className="relative z-10">프로젝트 보기</p>
                <span className="relative z-10">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image src={piroAppImage} width={240} height={230} alt="piroApp" />
          </div>
        </Card>
      </TiltCard>
      <TiltCard>
        <Card className="relative overflow-hidden">
          <div className="px-[25px]">
            <Image
              src={pirotImage}
              width={45}
              height={45}
              alt="pirot"
              className="rounded-[10px]"
            />
            <div className="mt-[25px] mb-[15px] text-[16px] font-bold">
              피롯 (Pirot)
            </div>
            <div className="text-[15px] font-medium text-[#616161]">
              개발 동아리를 위한 커뮤니케이션 솔루션
            </div>
            <Link href="/projects-detail/pirot">
              <div className="relative mt-[30px] text-[14px] flex gap-[5px] items-center w-fit rounded-[5px] cursor-pointer group  py-[2px]">
                <div
                  className="absolute inset-y-0 inset-x-[-9] bg-gray-100 rounded-[5px] opacity-0 transition duration-200 group-hover:opacity-100 pointer-events-none z-0 w-[110px]"
                  aria-hidden="true"
                />
                <p className="relative z-10">프로젝트 보기</p>
                <span className="relative z-10">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src={pirotScreenImage}
              width={350}
              height={230}
              alt="pirot screen"
              className="rounded-tl-lg"
            />
          </div>
        </Card>
      </TiltCard>
    </div>
  );
}
