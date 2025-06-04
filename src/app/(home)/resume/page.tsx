"use client";

import Divider from "@/components/custom/Divider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Activities from "./Activities";
import Education from "./Education";
import Language from "./Language";
import Military from "./Military";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

export default function ResumeScreen() {
  return (
    <div className="flex flex-col mt-[30px]">
      <div className="flex justify-end mb-[30px]">
        <Link href="./docs/resume.pdf" target="_blank">
          <Button className="cursor-pointer">PDF로 내려받기</Button>
        </Link>
      </div>
      <WorkExperience />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Activities />
      <Divider />
      <Language />
      <Divider />
      <Military />
    </div>
  );
}
