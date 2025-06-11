import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";

export default function DesignRoles() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>웹서비스 디자인</p>
          </div>
          <div>
            <BPT textClassName="font-medium text-[13px]">
              Figma를 사용하여 전체 디자인 진행 및 와이어프레임 구축
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              당근의 주황색을 Accent Color로 지정
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>렌딩페이지 제작</p>
          </div>
          <div>
            <BPT textClassName="font-medium text-[13px]">
              Figma를 사용하여 랜딩페이지 디자인 진행
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
