import IconRow from "@/components/custom/IconRow";
import MenuBar from "@/components/custom/MenuBar";
import Image from "next/image";
import { ReactNode } from "react";
import profileImage from "../../../public/images/profile-image.png";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-[700px] flex flex-col">
      <Image
        src={profileImage}
        width={100}
        height={100}
        alt="profile image"
        className="rounded-[25px]"
      />
      <div className="flex flex-col gap-[25px] my-[40px]">
        <p className="text-[30px] font-bold">안녕하세요, 박석류입니다.</p>
        <p className="text-[20px] font-medium text-[#616161]">
          프론트엔드 개발을 하고 있으며,
          <br />
          사람들의 손에 오래 머무르는 서비스를 만들고자 합니다.
        </p>
      </div>
      <IconRow />
      <div className="h-[70px] shrink-0" />
      <MenuBar />
      <div>{children}</div>
    </div>
  );
}
