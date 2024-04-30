import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";
export default function Key_factor_for_success() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  return (
    <div className="about-area bg-color ">
      <div
        className="container"
        style={{ marginBottom: "150px", overflow: "hidden" }}
      >
        {" "}
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2
              data-aos="fade-up"
              className="p-3 left-headline mb-2"
              dangerouslySetInnerHTML={{
                __html: t("rethinkenergy.rethinkenergy_page.fourth_heading"),
              }}
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="about-image">
                <img src="img/12_Pic2.webp" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="about-content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("rethinkenergy.rethinkenergy_page.second_page"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
