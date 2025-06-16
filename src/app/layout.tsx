import Footer from "@/components/custom/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/pretendard/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "개발자 박석류",
  description: "개인 포트폴리오 및 이력서 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} font-pretendard antialiased w-screen min-h-screen pt-[80px] flex flex-col justify-center items-center`}
      >
        {children}
        <Footer />
        <Toaster expand={true} />
      </body>
    </html>
  );
}
