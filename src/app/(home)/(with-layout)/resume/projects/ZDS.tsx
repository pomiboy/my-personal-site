import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function ZDS() {
  return (
    <div className="flex">
      <div className="basis-[280px] flex flex-col">
        <p className="text-[13px] text-[#616161]">
          피그말리온팀 | 2025.03 ~ 2025.03
        </p>
        <LinkWithIcon
          text="자체 디자인 시스템 구축"
          link="/projects-detail/project-ditto"
          textClassName="text-[18px] font-medium"
          blank={false}
        />
        <div className="flex flex-col mt-[7px] text-[13px] text-[#616161]">
          <p>본인 기여율 100%</p>
          <p>실무</p>
          <p className="text-[15px] text-black mt-[10px]">기술 스택</p>
          <p>Figma</p>
        </div>
      </div>
      <div className="flex-1 flex-col space-y-[5px] text-[14px]">
        <BPT>‘프로젝트 디토' 서비스를 위한 디자인 시스템 직접 구축</BPT>
        <BPT>
          서비스의 UI/UX 일관성과 개발 효율성 강화를 위해 Figma 기반 자체 디자인
          시스템 기획 및 구축
        </BPT>
        <BPT>
          Atomic Design 원칙을 도입하여 Atoms, Molecules, Organisms, Template
          단위로 컴포넌트 구조를 체계화함으로써, 신규 기능 개발 및 UI 확장 시
          재사용성과 유지보수성 향상
        </BPT>
        <BPT>
          디자인 시스템 도입 후, 프로토타입 제작 및 UI 설계 소요 시간 절반으로
          단축 및 신규기능 출시 주기 단축(10일 → 7일)
        </BPT>
        <BPT>
          실제 유저 인터뷰 및 피드백을 통해 “UI의 통일성 및 일관성 강화”,
          “서비스가 더 깔끔하고 사용하기 쉬워짐" 등 긍정적 평가 획득
        </BPT>
      </div>
    </div>
  );
}
