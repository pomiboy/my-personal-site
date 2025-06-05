import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";

export default function DesignRoles() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>앱 디자인</p>
          </div>
          <p className="font-medium text-[13px]">
            React Native + Expo + Typescript
          </p>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>디자인 시스템 구축</p>
          </div>
          <p className="font-medium text-[13px]">
            ESLint, Prettier, Husky, GitKraken
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
              feature → dev, dev → main 머지될 때 파이프라인을 통해 자동 빌드 및
              테스트 배포되도록 구현
            </BPT>
          </p>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
