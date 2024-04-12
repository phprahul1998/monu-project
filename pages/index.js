import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Rethinkenergy from "../components/Rethinkenergy";
import Advantage from "../components/Advantage";
import Inquery from "../components/Inquery";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import About from "../components/About";
// import Calculator from "../components/Calculator";
import Ourservice from "../components/Ourservice";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const { t } = useTranslation("en", { useSuspense: false });
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="sectionData">
      <Slider />
      <About />
      <Rethinkenergy />
      <Advantage />
      <Inquery />
      <Footer />
    </div>
  );
}
