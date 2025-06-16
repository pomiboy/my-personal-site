import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function Pirot() {
  return (
    <div className="flex">
      <div className="basis-[280px] flex flex-col">
        <p className="text-[13px] text-[#616161]">
          피로그래밍 | 2023.07 ~ 2023.08
        </p>
        <LinkWithIcon
          text="피롯 (Pirot)"
          link="/projects-detail/pirot"
          textClassName="text-[18px] font-medium"
          blank={false}
        />
        <div className="flex flex-col mt-[7px] text-[13px] text-[#616161]">
          <p>팀 구성 : FE 1명 / BE 3명</p>
          <p>본인 기여율 50%</p>
          <p>동아리</p>
          <p className="text-[15px] text-black mt-[10px]">기술 스택</p>
          <p>JavaScript(Vanilla), Figma</p>
        </div>
      </div>
      <div className="flex-1 flex-col space-y-[5px] text-[14px]">
        <BPT>개발 동아리들을 위한 메신저 서비스 &quot;피롯&quot; 개발</BPT>
        <BPT>서비스 디자인 주도 및 프론트엔드 개발 전담</BPT>
        <BPT>socket.io를 활용하여 메신저 시스템 개발</BPT>
        <BPT>마크다운 문법을 인식하는 입력창 구현</BPT>
        <BPT>
          monaco-editor 라이브러리를 활용하여 채팅입력창에 코드 입력 기능 구현
        </BPT>

        <BPT>
          <LinkWithIcon
            text="Github 바로가기"
            link=" https://github.com/Piro-Pirot/django-pirot"
            textClassName="text-[14px] font-medium"
          />
        </BPT>
      </div>
    </div>
  );
}
