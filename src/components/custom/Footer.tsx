import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[130px] text-[#a6a6a6] mt-[80px]">
      <p className="text-[12px]">Site made by Seokryu Park</p>
      <p className="text-[12px]">
        Can see site code{" "}
        <Link
          href="https://github.com/pomiboy/my-personal-site"
          target="_blank"
          className="underline hover:text-[#484848] transition duration-200"
        >
          here
        </Link>
      </p>
      <p className="text-[12px]">Facts Guaranteed</p>
      <p className="text-[12px]">2025</p>
    </div>
  );
}
