import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";

export default function FrontendRoles() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>개발 스택 결정</p>
          </div>
          <p className="font-medium text-[13px]">
            React Native + Expo + Typescript
          </p>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>코드 품질 관리 환경 세팅</p>
          </div>
          <p className="font-medium text-[13px]">
            ESLint, Prettier, Husky, GitKraken
          </p>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>CI/CD 파이프라인 구축</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT>Codemagic 사용하여 구축</BPT>
            <BPT>
              feature → dev, dev → main 머지될 때 파이프라인을 통해 자동 빌드 및
              테스트 배포되도록 구현
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>RESTful API</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT>Swagger를 통해 API 명세서를 확인</BPT>
            <BPT>Axios를 활용해 API를 RESTful하게 연동</BPT>
            <BPT>Tanstack Query를 사용해 API 상태관리를 처리</BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>Git을 사용한 협업</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT>main, dev, feature, hotfix 브랜치 전략</BPT>
            <BPT>GitKraken 사용하여 가시적인 Git 협업 진행</BPT>
            <BPT>
              Github의 Pull Request를 적극 활용하여 새로운 코드의 머지 전 상호
              체크
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>Context API</p>
          </div>
          <p className="font-medium text-[13px]">
            프로젝트 상태관리를 위해 Context API 활용 (외부 라이브러리 사용 X)
          </p>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
