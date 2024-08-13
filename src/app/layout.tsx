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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: CREATE ABOUT SECTION
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header></Header>
        <Hero></Hero>
        <FeedbackSection></FeedbackSection>
        <Carousel></Carousel>
        <FloatingWhatsapp></FloatingWhatsapp>
        <FeedbackCarousel></FeedbackCarousel>
        <Footer></Footer>
        {children}
      </body>
    </html>
  );
}
