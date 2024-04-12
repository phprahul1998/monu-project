"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { GiConvergenceTarget } from "react-icons/gi";

export default function About() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  return (
    <div className="solar_about_shape01">
      <div className="container">
        <div className="solar_about_back">
          <div className="solar_about_gradient"></div>
          <div className="row">
            <div
              className="col-lg-6 col-md-12 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="solar_about_detail">
                <h1
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: t("home.main_heading") }}
                />
                <p className="">{t("home.main_desc", "Default Heading")}</p>
                <Link href="/about" className="solar_btn">
                  {t("heading.readMeMore")}
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="solar_about_img">
                <img
                  src="img/solar_about01.png"
                  alt="solar-installation-the-energy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
