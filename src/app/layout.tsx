import type { Metadata } from "next";
import { Header } from "./components/header1";
import { Inter } from "next/font/google";
import { Carousel } from "./components/carousel";
import FeedbackSection from "./components/feedbackSection";
import { VideoSection } from "./components/videoBg";
import Hero from "./components/hero";
import "./globals.css";
import { Footer } from "./components/footer";
import { FeedbackCarousel } from "./components/feedbackCarousel";
import { FloatingWhatsapp } from "./components/floatingWhatsapp";
import { EmblaOptionsType } from "embla-carousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar Laser - Energia Fotovoltaica",
  description:
    "A melhor opção em energia solar na região da grande Florianópolis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  // add to the bg: bg-gradient-to-r from-orange-500 to-blue-200

  return (
    <html lang="pt-br ">
      <body
        className={`${inter.className} bg-gradient-to-r from-orange-700 to-orange-400 `}
      >
        <Header></Header>
        <VideoSection></VideoSection>
        <Hero></Hero>
        <VideoSection></VideoSection>
        <FeedbackSection slides={SLIDES} options={OPTIONS}></FeedbackSection>
        <Carousel></Carousel>
        <FloatingWhatsapp></FloatingWhatsapp>
        <FeedbackCarousel></FeedbackCarousel>
        <Footer></Footer>
        {children}
      </body>
    </html>
  );
}
