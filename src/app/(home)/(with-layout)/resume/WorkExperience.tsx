import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";
import { Links } from "@/constants/links";

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
          <BPT>
            AI 컴패니언 서비스 "프로젝트 디토" 어플리케이션 프론트엔드 개발 전담
          </BPT>
          <BPT>개발 시작~배포까지 전과정 참여</BPT>
          <BPT>
            2024.12 출시 이후 15번의 크고 작은 업데이트 진행, 현재까지 적극 운영
            중
          </BPT>
          <BPT>매일의 Scrum과 2주 단위의 Sprint로 task 진행</BPT>
          <BPT>
            <LinkWithIcon
              text="App Store"
              link={Links.DITTO_APP_STORE}
              textClassName="text-[14px] font-medium"
            />
            ,&nbsp;
            <LinkWithIcon
              text="Play Store"
              link={Links.DITTO_PLAY_STORE}
              textClassName="text-[14px] font-medium"
            />
            &nbsp;
            <span>출시</span>
          </BPT>
        </div>
      </div>
    </div>
  );
}
