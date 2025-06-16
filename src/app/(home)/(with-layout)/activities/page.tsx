"use client";

import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import TiltCard from "@/components/custom/TiltCard";
import pironeerImage from "../../../../../public/images/pironeer.png";
import piroImage from "../../../../../public/images/piro.png";
import piroNBImage from "../../../../../public/images/piroNB.png";
import yourgirls4xImage from "../../../../../public/images/yourgirls4xx.png";
import Link from "next/link";

export default function ActivitiesScreen() {
  return (
    <div className="flex flex-col gap-[30px] mt-[30px]">
      <TiltCard>
        <Card className="relative overflow-hidden">
          <div className="px-[25px]">
            <Image
              src={piroImage}
              width={45}
              height={45}
              alt="project ditto"
              className="rounded-[10px]"
            />
            <div className="mt-[25px] mb-[15px] text-[16px] font-bold">
              피로그래밍
            </div>
            <div className="text-[15px] mb-[5px] font-medium text-[#616161]">
              대학생 연합 웹개발 동아리
            </div>
            <div className="text-[15px] font-medium text-[#616161]">
              2023.07 ~ 2024.02
            </div>
            <Link href="/activities-detail/pirogramming">
              <div className="relative mt-[30px] text-[14px] flex gap-[5px] items-center w-fit rounded-[5px] cursor-pointer group  py-[2px]">
                <div
                  className="absolute inset-y-0 inset-x-[-9] bg-gray-100 rounded-[5px] opacity-0 transition duration-200 group-hover:opacity-100 pointer-events-none z-0 w-[87px]"
                  aria-hidden="true"
                />
                <p className="relative z-10">활동 보기</p>
                <span className="relative z-10">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          </div>
          <div className="absolute right-[-120px] bottom-[-160px]">
            <Image src={piroNBImage} width={480} height={480} alt="piro" />
          </div>
        </Card>
      </TiltCard>
      <TiltCard>
        <Card className="relative overflow-hidden">
          <div className="px-[25px]">
            <Image
              src={pironeerImage}
              width={45}
              height={45}
              alt="yourgirls.ai"
              className="rounded-[10px] border-[0.5px] border-[#919191]"
            />
            <div className="mt-[25px] mb-[15px] text-[16px] font-bold">
              피로니어
            </div>
            <div className="text-[15px] mb-[5px] font-medium text-[#616161]">
              피로그래밍 산하 개발팀
            </div>
            <div className="text-[15px] font-medium text-[#616161]">
              2023.09 ~ 2023.12
            </div>
            <Link href="/activities-detail/pironeer">
              <div className="relative mt-[30px] text-[14px] flex gap-[5px] items-center w-fit rounded-[5px] cursor-pointer group  py-[2px]">
                <div
                  className="absolute inset-y-0 inset-x-[-9] bg-gray-100 rounded-[5px] opacity-0 transition duration-200 group-hover:opacity-100 pointer-events-none z-0 w-[87px]"
                  aria-hidden="true"
                />
                <p className="relative z-10">활동 보기</p>
                <span className="relative z-10">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          </div>
          <div className="absolute right-[-50] bottom-[-100]">
            <Image
              src={pironeerImage}
              width={400}
              height={230}
              alt="yourgirls4x"
            />
          </div>
        </Card>
      </TiltCard>
    </div>
  );
}
