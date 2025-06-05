import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function YourgirlsAi() {
  return (
    <div className="flex">
      <div className="basis-[280px] flex flex-col">
        <p className="text-[13px] text-[#616161]">
          피그말리온팀 | 2024.07 ~ 2024.10
        </p>
        <LinkWithIcon
          text="yourgirls.ai 개발 및 운영"
          link="https://www.pygmalion.team/"
          textClassName="text-[18px] font-medium"
        />
        <div className="flex flex-col mt-[7px] text-[13px] text-[#616161]">
          <p>팀 구성 : FE 1명 / BE 2명</p>
          <p>본인 기여율 40%</p>
          <p>실무</p>
          <p className="text-[15px] text-black mt-[10px]">기술 스택</p>
          <p>
            React, Next.js, TypeScript,
            <br />
            Vercel, Tailwind CSS,
            <br />
            Styled-Components, Dexie,
            <br />
            Stable Diffusion
          </p>
        </div>
      </div>
      <div className="flex-1 flex-col space-y-[5px] text-[14px]">
        <BPT>
          React, Next.js, TypeScript 기반으로 설계 및 개발, Vercel을 통한 배포
        </BPT>
        <BPT>
          Figma를 활용한 UI/UX 디자인 주도, 모바일 우선(Mobile First) 전략
          및 반응형 웹 구현
        </BPT>
        <BPT>
          RESTful API 연동 : Swagger 기반 API 명세 활용, Axios와 Tanstack
          Query를 사용하여 API 연동 및 요청 상태관리 진행
        </BPT>
        <BPT>
          상태관리 : Context API와 Tanstack Query를 활용해 전역 상태 및 서버
          데이터 효율적으로 관리, Tanstack Query Devtools를 사용한 데이터 캐시
          최적화 진행
        </BPT>
        <BPT>Stable Diffusion을 사용하여 여러 AI 캐릭터 사진 생성</BPT>
        <BPT>
          PWA(Progressive Web App) 적용으로 앱 설치 및 오프라인 사용 경험 제공
        </BPT>
        <BPT>
          WebP 이미지 포맷 및 Lazy Loading 적용으로 페이지 로딩 속도 30% 단축
          (LCP기준 3초 → 2초)
        </BPT>
        <BPT>
          번들러 Webpack → TurboPack 전환: 빌드 시간 단축 및 Hot Module
          Replacement(HMR) 속도 향상으로 개발 생산성 증대
        </BPT>
        <BPT>
          Dexie 기반 IndexedDB 캐싱으로 이미지 렌더링 최적화 및 네트워크 트래픽
          감소
        </BPT>
      </div>
    </div>
  );
}
