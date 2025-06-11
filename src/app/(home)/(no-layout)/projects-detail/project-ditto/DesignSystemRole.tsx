import BPT from "@/components/custom/BPT";
import Divider from "@/components/custom/Divider";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";
import Image from "next/image";

export default function DesignSystemRole() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[15px] flex justify-between items-center">
            <p>디자인 시스템 구축</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold">
                자체 디자인 시스템의 필요성을 느낀 이유
              </p>
              <div className="font-medium text-[13px]">
                프로젝트 디토 앱을 출시하기 위해 개발할 당시에는 디자인의
                통일성에 대해 크게 고려하지 못한 채 개발에만 몰두했었습니다.
                이는 출시 이후 지속적으로 새로운 기능들을 추가하며 업데이트할 때
                큰 불편함을 야기했습니다. 피그마에서 새로운 기능을 디자인할 때
                일일이 앱 페이지들을 새로 만들어 제작해야했으며, 적용되는 폰트
                크기, 테두리 둥글기 정도, 여백의 크기, 테두리 색상 등의 속성들이
                그때 그때 주먹구구 식으로 비슷하지만 다르게 적용되었습니다. 이는
                앱 자체의 통일성을 저해하는 것은 물론이고, 새로운 기능을
                디자인하고 이를 프론트 개발에 적용할 때의 효율성을 크게
                떨어뜨렸습니다. 이러한 문제를 해결하므로써{" "}
                <span className="font-bold">
                  개발 경험 뿐만 아니라 사용자 경험을 개선하기 위해 자체적인
                  디자인 시스템을 구축하게 되었습니다.
                </span>
              </div>
            </div>
            <Divider margin="my-0" />
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold">어떻게 구축하였는가</p>
              <div className="font-medium text-[13px]">
                <BPT textClassName="font-medium text-[13px]">Figma로 작업</BPT>
                <BPT textClassName="font-medium text-[13px]">
                  Atomic Design 원칙을 도입하여 Atoms, Molecules, Organisms,
                  Template 단위로 컴포넌트 구조를 체계화함으로써, 신규 기능 개발
                  및 UI 확장 시 재사용성과 유지보수성 향상
                </BPT>
              </div>
            </div>
            <Divider margin="my-0" />
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold">성과</p>
              <div className="font-medium text-[13px]">
                <BPT textClassName="font-medium text-[13px]">
                  디자인 시스템 도입 후,{" "}
                  <span className="font-bold">
                    프로토타입 제작 및 UI 설계 소요 시간 절반으로 단축 및
                    신규기능 출시 주기 단축(10일 → 7일)
                  </span>
                </BPT>
                <BPT textClassName="font-medium text-[13px]">
                  실제 유저 인터뷰 및 피드백을 통해{" "}
                  <span className="font-bold">
                    “UI의 통일성 및 일관성 강화”, “서비스가 더 깔끔하고 사용하기
                    쉬워짐" 등 긍정적 평가 획득
                  </span>
                </BPT>
              </div>
            </div>
            <Divider margin="my-0" />
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold">살펴보기</p>
              <div className="font-medium text-[13px] flex flex-col gap-4">
                <Image
                  src="/images/project-ditto/design-system/ds1.png"
                  width="500"
                  height="300"
                  alt="ds1"
                  className="border-[0.7px] border-[#979797] rounded-lg"
                />
                <Image
                  src="/images/project-ditto/design-system/ds2.png"
                  width="500"
                  height="300"
                  alt="ds2"
                  className="border-[0.7px] border-[#979797] rounded-lg"
                />
                <Image
                  src="/images/project-ditto/design-system/ds3.png"
                  width="500"
                  height="300"
                  alt="ds3"
                  className="border-[0.7px] border-[#979797] rounded-lg"
                />
                <Image
                  src="/images/project-ditto/design-system/ds4.png"
                  width="500"
                  height="300"
                  alt="ds4"
                  className="border-[0.7px] border-[#979797] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
