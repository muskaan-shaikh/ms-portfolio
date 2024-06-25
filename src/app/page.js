import { Inter } from "next/font/google";
import Main from "@/sections/Main";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Initial from "@/components/Initial";

const inter = Inter({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={`${inter.className} h-screen w-screen bg-secondary`}>
      {/* <Initial /> */}
      <Main />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
