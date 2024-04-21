import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";
export default function unabhangigkeit_durch_pv_fotovoltaik() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  return (
    <div className="about-area bg-color ">
      <div className="container" style={{ marginBottom: "150px" }}>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2
              data-aos="fade-up"
              className="p-3 left-headline mb-2"
              dangerouslySetInnerHTML={{
                __html: t("advantages_page.first_page_image.heading"),
              }}
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="about-image">
                <img
                  src={`${t("advantages_page.first_page_image.image")}`}
                  alt=""
                  className="ab-first-img"
                />
                <img
                  src={`${t("advantages_page.first_page_image.thumbnail")}`}
                  alt=""
                  className="ab-second-img"
                />
                <a
                  target="_blank"
                  href={`${t("advantages_page.first_page_image.videlink")}`}
                  rel="noopener noreferrer"
                  className="video-play vid-zone"
                >
                  <FaPlayCircle />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="about-content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("advantages_page.first_page_image.para"),
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
