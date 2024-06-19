import { Inter } from "next/font/google";
import Main from "@/components/Main";
import Experience from "@/components/Experience";

const inter = Inter({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={`${inter.className} h-screen w-screen bg-[#000000]`}>
      <Main/>
      <Experience/>
    </main>
  );
}
