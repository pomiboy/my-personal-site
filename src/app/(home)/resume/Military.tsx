import BPT from "@/components/custom/BPT";

export default function Military() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mb-[30px]">병역</h1>
      <div className="flex">
        <div className="basis-[280px] flex flex-col">
          <p className="text-[18px] font-medium">육군</p>
          <p className="text-[14px] mt-[7px] text-[#616161]">병장만기전역</p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <BPT>2021.03.15 ~ 2022.09.14</BPT>
        </div>
      </div>
    </div>
  );
}
