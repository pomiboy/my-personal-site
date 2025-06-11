import BPT from "@/components/custom/BPT";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";

export default function FrontendRoles() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>화면 구현</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT>Javascript, Django template 사용</BPT>
            <BPT>랜딩페이지, 채팅화면 등 모든 화면 구현</BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>모바일 반응형</p>
          </div>
          <p className="font-medium text-[13px]">
            모바일, 데스크탑 모두에서의 쾌적한 사용을 위한 반응형 구현
          </p>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>마크다운 채팅 스티일링</p>
          </div>
          <p className="font-medium text-[13px]">
            django-mardownx 라이브러리를 활용하여 채팅 입력값을 마크다운
            형식으로 변환하도록 구현
          </p>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>코드입력창</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT>
              Microsoft의 monaco-editor 라이브러리를 활용하여 코드입력창 구현
            </BPT>
            <BPT>
              코드입력창에 코드를 입력한 후 전송을 누르면 코드 레이아웃을
              유지하며 채팅이 전송됨
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>채팅</p>
          </div>
          <div className="font-medium text-[13px]">
            socket.io를 활용하여 websocket 기반 채팅 구현
          </div>
        </div>
      </GlowingBorderBox>
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[10px] flex justify-between items-center">
            <p>Git을 사용한 협업</p>
          </div>
          <div className="font-medium text-[13px]">
            <BPT textClassName="font-medium text-[13px]">
              main, dev, feature, hotfix 브랜치 전략
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              GitKraken 사용하여 가시적인 Git 협업 진행
            </BPT>
            <BPT textClassName="font-medium text-[13px]">
              Github의 Pull Request를 적극 활용하여 새로운 코드의 머지 전 상호
              체크
            </BPT>
          </div>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
