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
          <div className="font-medium text-[13px]">
            <BPT textClassName="font-medium text-[13px]">
              React + Next.js + Typescript
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              ESLint, Prettier, Husky, GitKraken
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>채팅시스템 구현</p>
          </div>
          <p className="font-medium text-[13px]">
            Websocket을 사용하여 채팅 구현 (react-use-websocket 라이브러리 활용)
          </p>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>Context API</p>
          </div>
          <div className="font-medium text-[13px]">
            프로젝트의 상태관리를 위해 Context API 사용 (외부 라이브러리 사용 x)
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>RESTful API</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT textClassName="font-medium text-[13px]">
              Swagger를 통해 API 명세서를 확인
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              Axios를 활용해 API를 RESTful하게 연동
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              Tanstack Query를 사용해 API 상태관리를 처리
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>웹 성능 최적화 작업</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT textClassName="font-medium text-[13px]">
              Lazy Loading 사용하여 페이지 로딩 시간 단축
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              TurboPack 사용하여 핫리로딩 시간 단축
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              localForage를 활용한 indexedDB 내 이미지 캐싱으로 최적화 진행
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>반응형 웹 디자인</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT textClassName="font-medium text-[13px]">
              모바일에서도 완벽히 쾌적한 UI를 구사하기 위해 mobile first 반응형
              구현 진행
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              모바일앱처럼 사용할 수도 있도록 PWA 적용
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
