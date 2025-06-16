import { MenuItem } from "./MenuItem";

export default function MenuBar() {
  return (
    <div className="flex gap-[30px]">
      <MenuItem title="Projects" slug="projects" />
      <MenuItem title="Resume" slug="resume" />
      <MenuItem title="Activities" slug="activities" />
    </div>
  );
}
