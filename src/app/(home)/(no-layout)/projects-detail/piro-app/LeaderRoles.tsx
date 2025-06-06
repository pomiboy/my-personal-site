import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";

export default function LeaderRoles() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>서비스 기획</p>
          </div>
          <BPT textClassName="font-medium text-[13px]">
            동아리 운영의 불편함을 해소하기 위한 앱서비스 아이디어 구상
          </BPT>
          <BPT textClassName="font-medium text-[13px]">
            React Native 기반 앱 기획 및 개발 주도
          </BPT>
          <BPT textClassName="font-medium text-[13px]">
            웹개발 동아리 내 최초 어플리케이션 개발 사례
          </BPT>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>리딩</p>
          </div>
          <p className="font-medium text-[13px]">
            팀장으로서 기획, 화면 설계(Figma), 팀원 역할분배 및 전체 개발 일정
            리딩
          </p>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
