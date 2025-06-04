import BPT from "@/components/custom/BPT";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function Education() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mb-[30px]">Education</h1>
      <div className="flex">
        <div className="basis-[280px] flex flex-col">
          <p className="text-[18px] font-medium">고려대학교(서울)</p>
          <p className="text-[14px] mt-[7px] text-[#616161]">
            2019.03 ~ 4학년 재학 중
          </p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <BPT>
            <LinkWithIcon
              text="소프트웨어기술벤처학과"
              link="https://info.korea.ac.kr/info/under/sw_intro.do"
              textClassName="text-[14px] font-medium"
            />
            &nbsp;
            <span>이중전공</span>
          </BPT>
          <div className="pl-[15px]">
            <BPT>소프트웨어공학, 운영체제, 자료구조, 알고리즘 등 수강</BPT>
          </div>
          <BPT>식품자원경제학과 본전공</BPT>
        </div>
      </div>
    </div>
  );
}
