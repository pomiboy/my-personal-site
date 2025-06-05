import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function Activities() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mb-[30px]">Activities</h1>
      <div className="flex mb-[40px]">
        <div className="basis-[280px] flex flex-col">
          <LinkWithIcon
            text="피로그래밍"
            textClassName="text-[18px] font-medium"
            link="https://pirogramming.com"
          />
          <p className="text-[14px] mt-[7px] text-[#616161]">
            대학생 연합 웹개발 동아리
            <br />
            2023.07 ~ 2024.02
          </p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <BPT>19기 기수원 및 20기 기획운영팀장으로 참여</BPT>
          <BPT>세션 및 세미나 기획</BPT>
          <BPT>동아리 전 일정 및 이벤트 기획 및 진행</BPT>
          <BPT>신규 기수 리크루팅 준비 및 진행</BPT>
          <BPT>웹 개발 강의 진행 (Javascript, CSS)</BPT>
          <BPT>메신저 서비스 프로젝트(피롯) 진행</BPT>
        </div>
      </div>
      <div className="flex">
        <div className="basis-[280px] flex flex-col">
          <p className="text-[18px] font-medium">피로니어</p>
          <p className="text-[14px] mt-[7px] text-[#616161]">
            피로그래밍 산하 개발팀
            <br />
            2023.09 ~ 2023.12
          </p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <BPT>팀장으로써 개발팀 구성 및 리드 (FE 2명 / BE 3명)</BPT>
          <BPT>피로그래밍 공식 어플리케이션 개발 및 출시 (프론트엔드 담당)</BPT>
          <BPT>피로그래밍 홈페이지 전면 리뉴얼 작업 (프론트엔드 담당)</BPT>
        </div>
      </div>
    </div>
  );
}
