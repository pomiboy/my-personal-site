export interface Props {
  margin?: string;
}

export default function Divider({ margin = "my-[40px]" }: Props) {
  return <div className={`w-full h-[0.5px] bg-[#dadada] ${margin}`} />;
}
