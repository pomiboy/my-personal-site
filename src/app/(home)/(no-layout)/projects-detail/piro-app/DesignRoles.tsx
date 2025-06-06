import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";

export default function DesignRoles() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>앱 디자인</p>
          </div>
          <div>
            <BPT textClassName="font-medium text-[13px]">
              Figma를 사용하여 전체 디자인 진행 및 와이어프레임 구축
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              검정과 네온그린을 새로운 Accent Color로 지정
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
