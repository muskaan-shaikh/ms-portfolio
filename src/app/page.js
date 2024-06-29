import { Inter } from "next/font/google";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Links from "@/components/Links";

const inter = Inter({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={`${inter.className} h-screen w-screen bg-secondary`}>
      <Main />
      <Experience />
      <Projects />
      <Contact />
      <Links />
      <Footer />
    </main>
  );
}
