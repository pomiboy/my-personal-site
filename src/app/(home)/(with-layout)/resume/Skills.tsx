export default function Skills() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mb-[30px]">Skills</h1>
      <div className="flex mb-[20px]">
        <div className="basis-[280px] flex flex-col">
          <p className="text-[18px] font-medium">주요 기술</p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <p className="text-[14px]">
            React Native, React, Next.js, TypeScript, Expo, Git, Figma,
            <br />
            Tailwind CSS, Tanstack Query(React Query)
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="basis-[280px] flex flex-col">
          <p className="text-[18px] font-medium">경험 기술</p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <p className="text-[14px]">
            Sentry, Styled-Components, Codemagic, PWA, Turbopack, Dexie, Stable
            Diffusion, Flux, ComfyUI, socket.io
          </p>
        </div>
      </div>
    </div>
  );
}
