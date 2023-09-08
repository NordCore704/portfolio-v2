import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Description,
  Intro,
  SeoHeaders,
  WorkDisplayMain,
  ContactForm,
} from "@/exports";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-scheme-ash-blue overflow-hidden">
      <SeoHeaders />
      <Intro />
      <Description />
      <WorkDisplayMain />
      <ContactForm />
    </main>
  );
}
