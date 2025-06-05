import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";

export default function DesignRoles() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>웹사이트 디자인</p>
          </div>
          <p className="font-medium text-[13px]">
            Figma와 Daisy UI 라이브러리를 활용하여 전체 디자인 진행
          </p>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>AI 이미지 생성</p>
          </div>
          <p className="font-medium text-[13px]">
            <BPT textClassName="font-medium text-[13px]">
              Stable Diffusion 사용하여 추구 이미지에 맞는 AI 캐릭터 생성
            </BPT>
          </p>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
