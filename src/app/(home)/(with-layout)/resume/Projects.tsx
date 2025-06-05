import PiroApp from "./projects/PiroApp";
import PiroHomepage from "./projects/PiroHomepage";
import Pirot from "./projects/Pirot";
import ProjectDitto from "./projects/ProjectDitto";
import YourgirlsAi from "./projects/YourgirlsAi";
import ZDS from "./projects/ZDS";

export default function Projects() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mb-[30px]">Projects</h1>
      <div className="flex flex-col gap-[40px]">
        <ProjectDitto />
        <ZDS />
        <YourgirlsAi />
        <PiroHomepage />
        <PiroApp />
        <Pirot />
      </div>
    </div>
  );
}
