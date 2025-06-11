import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function ProjectDitto() {
  return (
    <div className="flex">
      <div className="basis-[280px] flex flex-col">
        <p className="text-[13px] text-[#616161]">
          피그말리온팀 | 2024.11 ~ 2025.04
        </p>
        <LinkWithIcon
          text="프로젝트 디토 개발 및 출시/운영"
          link="/projects-detail/project-ditto"
          textClassName="text-[18px] font-medium"
          blank={false}
        />
        <div className="flex flex-col mt-[7px] text-[13px] text-[#616161]">
          <p>팀구성 : FE 1명 / BE 1명</p>
          <p>본인 기여율 50% (FE 전담)</p>
          <p>실무</p>
          <p className="text-[15px] text-black mt-[10px]">기술 스택</p>
          <p>
            React Native, Expo, Typescript,
            <br />
            Tanstack Query, Tailwind CSS,
            <br />
            Sentry, Codemagic, Flux
          </p>
        </div>
      </div>
      <div className="flex-1 flex-col space-y-[5px] text-[14px]">
        <BPT>
          React Native, Expo, TypeScript 기반으로 한 달 반 만에 앱 완성 및
          앱스토어/플레이스토어 동시 출시
        </BPT>
        <BPT>
          Figma로 전체 UI/UX 설계 및 프로토타입 제작, Atomic Design 적용으로
          컴포넌트 일관성 및 개발 효율성 강화
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
        <BPT>
          인앱결제 : react-native-iap로 인앱구매 기능 구현, 결제 성공률 99% 이상
          유지
        </BPT>
        <BPT>
          AI 이미지 생성 : Flux(AI 이미지 생성 모델)와 ComfyUI를 사용하여 정교한
          AI 캐릭터 이미지 생성
        </BPT>
        <BPT>
          다중 로그인 : 애플/카카오/전화번호 로그인 구현, Context API로 인증상태
          안전하게 관리
        </BPT>
        <BPT>
          성과 : 출시 후 3개월 동안 누적 가입자 수 10,000명, DAU 1,500명, 25’
          2월 기준 앱스토어 롤플레잉 게임 카테고리 차트 25위 기록
        </BPT>
        <BPT>코드 품질 관리 및 자동화 :</BPT>
        <div className="pl-[15px] flex flex-col space-y-[5px]">
          <BPT>
            Codemagic 기반 CI/CD 파이프라인 구축, iOS/Android 자동 빌드·배포
          </BPT>
          <BPT>ESLint, Prettier, Husky로 코드 스타일 및 커밋 검사 자동화</BPT>
          <BPT>
            Sentry 도입으로 에러 실시간 모니터링, 장애 대응 시간 40% 단축
          </BPT>
          <BPT>
            Expo Updates로 OTA(Over-the-Air) 업데이트 체계 마련, 긴급 버그 대응
            시간 단축
          </BPT>
        </div>
      </div>
    </div>
  );
}
