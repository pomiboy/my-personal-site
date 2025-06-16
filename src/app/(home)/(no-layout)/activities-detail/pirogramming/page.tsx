"use client";

import piroImage from "../../../../../../public/images/piro.png";
import Image from "next/image";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";
import ProjectDetailItem from "../../projects-detail/ProjectDetailItem";
import CPT from "@/components/custom/CPT";
import BPT from "@/components/custom/BPT";
import { useState } from "react";

export default function PirogrammingScreen() {
  const [ratiosRow1, setRatiosRow1] = useState([1, 1]);
  const [ratiosRow2, setRatiosRow2] = useState([1, 1]);
  const [ratiosRow3, setRatiosRow3] = useState([1, 1]);

  const handleImageLoad = (
    rowIndex: number,
    imageIndex: number,
    img: HTMLImageElement
  ) => {
    const ratio = img.naturalWidth / img.naturalHeight;

    if (rowIndex === 0) {
      setRatiosRow1((prev) => {
        const newRatios = [...prev];
        newRatios[imageIndex] = ratio;
        return newRatios;
      });
    } else if (rowIndex === 1) {
      setRatiosRow2((prev) => {
        const newRatios = [...prev];
        newRatios[imageIndex] = ratio;
        return newRatios;
      });
    } else if (rowIndex === 2) {
      setRatiosRow3((prev) => {
        const newRatios = [...prev];
        newRatios[imageIndex] = ratio;
        return newRatios;
      });
    }
  };
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
        <LinkWithIcon
          text="피로그래밍"
          link="https://pirogramming.com"
          textClassName="text-[30px] font-bold"
        />
        <p className="text-[20px] font-medium text-[#616161]">
          대학생 연합 웹개발 동아리
        </p>
      </div>
      <div className="flex flex-col space-y-[27px] mt-[10px]">
        <ProjectDetailItem label="활동 기간" content="2023.07 ~ 2024.02" />
        <ProjectDetailItem
          label="활동 설명"
          content={
            <p>
              2023.07~08에는 <span className="font-bold">19기 기수원</span>으로,
              2023.09~2024.02에는&nbsp;
              <span className="font-bold">20기 운영진 기획운영팀장</span>으로
              활동하였습니다.
            </p>
          }
        />
        <ProjectDetailItem
          label="진행한 활동"
          content={
            <div className="flex flex-col gap-[5px]">
              <CPT>
                <LinkWithIcon
                  text="개발 동아리 커뮤니케이션 서비스 '피롯' 프로젝트 진행"
                  link="/project-detail/pirot"
                  textClassName="text-[16px]"
                />
              </CPT>
              <CPT textClassName="text-[16px]">
                동아리 전체 일정 기획 및 상세 세션 기획
              </CPT>
              <CPT textClassName="text-[16px]">
                신규 기수 리크루팅 기획 및 진행
              </CPT>
              <div className="flex flex-col pl-[30px] gap-2 my-1">
                <BPT textClassName="text-[16px]">
                  서류 & 면접 평가 기준 마련
                </BPT>
                <BPT textClassName="text-[16px]">
                  인재 상에 따른 평가문항 마련
                </BPT>
                <BPT textClassName="text-[16px]">
                  서류평가 & 면접평가 실제 진행
                </BPT>
              </div>
              <CPT textClassName="text-[16px]">
                워크샵, MT, 홈커밍데이 등 각종 이벤트 기획 및 진행
              </CPT>
              <CPT textClassName="text-[16px]">
                신규 기수 대상 HTML, CSS, JS 강의 진행
              </CPT>
              <div className="flex flex-col pl-[30px] gap-2 my-1">
                <BPT textClassName="text-[16px]">
                  &apos;투두메이트&apos; 서비스 클론코딩 강의
                </BPT>
              </div>
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
                src="/images/pirogramming/pirohd4.jpg"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(0, 0, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">
                    신규 기수 워크샵 진행
                  </h3>
                  <p className="text-sm">(우측 본인)</p>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-lg group relative"
              style={{ flex: `${ratiosRow1[1]} 1 0%` }}
            >
              <img
                src="/images/pirogramming/pirohd1.JPG"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(0, 1, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">
                    신규 기수 워크샵 진행
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full items-stretch">
            <div
              className="overflow-hidden rounded-lg group relative"
              style={{ flex: `${ratiosRow2[0]} 1 0%` }}
            >
              <img
                src="/images/pirogramming/pirohd2.png"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(1, 0, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">대면 세션 진행</h3>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-lg group relative"
              style={{ flex: `${ratiosRow2[1]} 1 0%` }}
            >
              <img
                src="/images/pirogramming/pirohd3.JPG"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(1, 1, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">
                    20기 신입부원들과 운영진
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full items-stretch">
            <div
              className="overflow-hidden rounded-lg group relative"
              style={{ flex: `${ratiosRow3[0]} 1 0%` }}
            >
              <img
                src="/images/pirogramming/pirohd5.jpg"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(2, 0, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">홈커밍 데이</h3>
                  <p className="text-sm opacity-90">
                    3년만에 기획 및 진행하게 됨
                  </p>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-lg group relative"
              style={{ flex: `${ratiosRow3[1]} 1 0%` }}
            >
              <img
                src="/images/pirogramming/pirohd6.png"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  handleImageLoad(2, 1, e.currentTarget)
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold">신규 기수 명찰</h3>
                  <p className="text-sm opacity-90">직접 새롭게 디자인 진행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
