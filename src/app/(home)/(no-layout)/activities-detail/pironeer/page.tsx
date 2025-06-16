"use client";

import pironeerImage from "../../../../../../public/images/pironeer.png";
import Image from "next/image";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";
import ProjectDetailItem from "../../projects-detail/ProjectDetailItem";
import CPT from "@/components/custom/CPT";
import { useState } from "react";
import Divider from "@/components/custom/Divider";

export default function PironeerScreen() {
  const [ratiosRow1, setRatiosRow1] = useState([1, 1]);

  const handleImageLoad = (imageIndex: number, img: HTMLImageElement) => {
    const ratio = img.naturalWidth / img.naturalHeight;
    setRatiosRow1((prev) => {
      const newRatios = [...prev];
      newRatios[imageIndex] = ratio;
      return newRatios;
    });
  };
  return (
    <div className="h-full w-[700px] flex flex-col">
      <Image
        src={pironeerImage}
        width={100}
        height={100}
        alt="profile image"
        className="rounded-[25px] shadow-sm"
      />
      <div className="flex flex-col gap-[25px] my-[40px]">
        <p className="text-[30px] font-bold">피로니어</p>
        <p className="text-[20px] font-medium text-[#616161]">
          피로그래밍 운영진 산하 개발팀
        </p>
      </div>
      <div className="flex flex-col space-y-[27px] mt-[10px]">
        <ProjectDetailItem label="활동 기간" content="2023.09 ~ 2023.12" />
        <ProjectDetailItem
          label="활동 설명"
          content={
            <p>
              피로그래밍 운영진 산하 개발팀 피로니어를&nbsp;
              <span className="font-bold">직접 설립</span>하였고{" "}
              <span className="font-bold">팀장으로 활동</span>했습니다.
            </p>
          }
        />
        <ProjectDetailItem
          label="설립 목적"
          content={
            <div className="flex flex-col gap-[5px]">
              <CPT>
                피로그래밍 전용의 서비스를 만들어 동아리의 원활한 운영과 문제
                해결을 돕기 위함
              </CPT>
              <CPT>
                기존 홈페이지의 노후화된 UX/UI를 개선하여 홈페이지 방문률과
                지원율을 높이고자 함
              </CPT>
              <CPT>
                기존에 수동으로 이뤄진 출석체크, 보증금, 과제공지 등의
                단순업무를 자동화하고자 함
              </CPT>
              <CPT>
                동아리 내 공식 서비스들을 소유하므로써 개발 동아리로서의 가치를
                높이고자 함
              </CPT>
            </div>
          }
        />
        <ProjectDetailItem
          label="진행한 활동"
          content={
            <div className="flex flex-col gap-[5px]">
              <p className="font-medium mb-[5px]">[동아리 자체 활동]</p>
              <CPT>동아리 홈페이지 리뉴얼 개발 진행</CPT>
              <CPT>
                <LinkWithIcon
                  text="동아리 공식 어플리케이션 개발 진행"
                  link="/projects-detail/piro-app"
                  textClassName="text-[16px]"
                  blank={false}
                />
              </CPT>
              <Divider margin="my-[10px]" />
              <p className="font-medium mb-[5px]">[팀장으로서의 활동]</p>
              <CPT>스터디 커리큘럼 기획 및 진행</CPT>
              <CPT>매주 2회의 대면 스터디 장소 대관</CPT>
              <CPT>자체 과제 부여</CPT>
              <CPT>개발 일정 계획 및 진행</CPT>
            </div>
          }
        />
      </div>
      <div className="flex flex-col gap-[15px] mt-[20px]">
        <div className="text-[16px] font-semibold">살펴보기</div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-4 w-full items-stretch">
            <div
              className="overflow-hidden rounded-lg group relative"
              style={{ flex: `${ratiosRow1[0]} 1 0%` }}
            >
              <img
                src="/images/pironeer/pironeerhd1.png"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(0, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">최종 발표회</h3>
                  <p className="text-sm">(윗줄 중앙 본인)</p>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-lg group relative"
              style={{ flex: `${ratiosRow1[1]} 1 0%` }}
            >
              <img
                src="/images/pironeer/pironeerhd2.png"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(1, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">최종 발표회</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
