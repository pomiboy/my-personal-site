import BPT from "@/components/custom/BPT";

export default function Language() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mb-[30px]">Language</h1>
      <div className="flex">
        <div className="basis-[280px] flex flex-col">
          <p className="text-[18px] font-medium">영어</p>
          <p className="text-[14px] mt-[7px] text-[#616161]">상</p>
        </div>
        <div className="flex-1 flex-col space-y-[5px] text-[14px]">
          <BPT>TOEIC 975점 (2024.02 취득)</BPT>
          <BPT>TOEIC Speaking AH 200점 (2024.04 취득)</BPT>
          <BPT>TOEFL 104점 (2024.05 취득)</BPT>
          <BPT>OPIc AL (2024.04 취득)</BPT>
        </div>
      </div>
    </div>
  );
}
