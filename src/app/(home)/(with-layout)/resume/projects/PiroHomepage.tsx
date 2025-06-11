import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function PiroHomepage() {
  return (
    <div className="flex">
      <div className="basis-[280px] flex flex-col">
        <p className="text-[13px] text-[#616161]">
          피로니어 | 2023.09 ~ 2023.10
        </p>
        <p className="text-[18px] font-medium">
          피로그래밍 공식 홈페이지 리뉴얼
        </p>
        <div className="flex flex-col mt-[7px] text-[13px] text-[#616161]">
          <p>팀 구성 : FE 2명 / BE 1명</p>
          <p>본인 기여율 30%</p>
          <p>동아리</p>
          <p className="text-[15px] text-black mt-[10px]">기술 스택</p>
          <p>JavaScript(Vanilla), Figma</p>
        </div>
      </div>
      <div className="flex-1 flex-col space-y-[5px] text-[14px]">
        <BPT>
          노후화된 UX/UI 문제를 해결하고 방문율·지원율을 높이기 위해 프로젝트
          기획 및 FE개발, 디자인 주도
        </BPT>
        <BPT>
          바닐라 JavaScript 기반 Home, About Us, Portfolio 등 주요 페이지 개발
          및 반응형 UI 구현
        </BPT>
        <BPT>Figma로 신규 홈페이지 디자인 및 동아리 로고 리디자인</BPT>
        <BPT>
          리뉴얼 후 홈페이지 방문율 15% 증가, 신규 기수 리크루팅 지원자 수 25%
          증가 등 실질적 성과 달성
        </BPT>
        <BPT>
          <LinkWithIcon
            text="홈페이지 바로가기"
            link="https://pirogramming.com"
            textClassName="text-[14px] font-medium"
          />
        </BPT>
      </div>
    </div>
  );
}
