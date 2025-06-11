import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function PiroApp() {
  return (
    <div className="flex">
      <div className="basis-[280px] flex flex-col">
        <p className="text-[13px] text-[#616161]">
          피로니어 | 2023.10 ~ 2023.12
        </p>
        <LinkWithIcon
          text="피로그래밍 공식 어플리케이션 개발"
          link="/projects-detail/piro-app"
          textClassName="text-[18px] font-medium"
          blank={false}
        />
        <div className="flex flex-col mt-[7px] text-[13px] text-[#616161]">
          <p>팀 구성 : FE 2명 / BE 3명</p>
          <p>본인 기여율 40%</p>
          <p>동아리</p>
          <p className="text-[15px] text-black mt-[10px]">기술 스택</p>
          <p>
            React Native, Expo
            <br />
            Styled-Components, Figma
          </p>
        </div>
      </div>
      <div className="flex-1 flex-col space-y-[5px] text-[14px]">
        <BPT>
          동아리 운영(출석, 공지, 보증금 관리)의 불편함을 해소하기 위해 React
          Native 기반 앱 기획 및 개발 주도
        </BPT>
        <BPT>
          팀장으로서 기획, 화면 설계(Figma), 팀원 역할분배 및 전체 개발 일정
          리딩
        </BPT>
        <BPT>홈, 공지, 출석 등 주요 화면 프론트엔드 개발 담당</BPT>
        <BPT>Styled-Components로 일관된 UI 구현</BPT>
        <BPT>
          출석코드 기반 출석체크, 실시간 보증금 확인 등 핵심 기능 설계 및
          구현으로 운영진과 신입부원 모두의 동아리 활동 효율 및 편의성 대폭 개선
        </BPT>
        <BPT>
          2024 상반기, 하반기 신입부원 63명 대상으로 실사용 진행, “매우
          편리하다” 등 긍정적 피드백 획득
        </BPT>
        <BPT>
          <LinkWithIcon
            text="Github 바로가기"
            link="https://github.com/Pironeer-APP"
            textClassName="text-[14px] font-medium"
          />
        </BPT>
      </div>
    </div>
  );
}
