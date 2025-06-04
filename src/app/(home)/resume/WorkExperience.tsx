import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function WorkExperience() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mb-[30px]">Work Experience</h1>
      <div className="flex">
        <div className="basis-[280px] flex flex-col">
          <LinkWithIcon
            text="피그말리온팀"
            link="https://www.pygmalion.team/"
            textClassName="text-[18px] font-medium"
          />
          <p className="text-[14px] mt-[7px] text-[#616161]">
            프론트엔드 엔지니어
            <br />
            2024.07 ~ 2025.04
          </p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <p>
            - AI 컴패니언 서비스 "프로젝트 디토" 어플리케이션 프론트엔드 개발
            전담
          </p>
          <p>- 개발 시작~배포까지 전과정 참여</p>
          <p>
            - 2024.12 출시 이후 15번의 크고 작은 업데이트 진행, 현재까지 적극
            운영 중
          </p>
          <p>- 매일의 Scrum과 2주 단위의 Sprint로 task 진행</p>
          <div className="flex items-center">
            <span>-&nbsp;</span>
            {"  "}
            <LinkWithIcon
              text="App Store"
              link=" https://apps.apple.com/app/id6738158392"
              textClassName="text-[14px] font-medium"
            />
            ,&nbsp;
            <LinkWithIcon
              text="Play Store"
              link="https://play.google.com/store/apps/details?id=com.pygmalion.proj_july&hl=ko"
              textClassName="text-[14px] font-medium"
            />
            &nbsp;
            <span>출시</span>
          </div>
        </div>
      </div>
    </div>
  );
}
