"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  FaAngleDoubleRight,
  FaMapMarkerAlt,
  FaGlobeAsia,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  return (
    <div className="solar_footer">
      <div className="container">
        <div className="solar_footer_shape">
          <div className="solar_footer_gradient"></div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="solar_footer_ab">
                {/* <a href="index.html">
                  <img
                    src="img/footer_logo.png"
                    alt="solar-installation-footer-logo"
                  />
                </a> */}
                <h1
                  className="text-white "
                  style={{ fontSize: "46px !important" }}
                >
                  Renevatec
                </h1>
                <span className="text-white ">
                  Regenerative Energie-Technik
                </span>
                <p className="text-white">
                  {t("footer.para1", "Default Heading")}
                </p>
                <div className="top_solar_btn">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/renevatec/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61558347182647"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://accountscenter.instagram.com/profiles/17841465975831071/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=+4916090386234&text=Hallo!"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="solar_footer_links">
                <h3>{t("heading.use_ful_link")}</h3>
                <div className="solar_links">
                  <ul>
                    <li>
                      <FaAngleDoubleRight />{" "}
                      <Link href="/">{t("menu.home")}</Link>
                    </li>
                    <li>
                      <FaAngleDoubleRight />{" "}
                      <Link href="/imprint">{t("menu.imprint")}</Link>
                    </li>
                    <li>
                      <FaAngleDoubleRight />{" "}
                      <Link href="/agb">{t("menu.term_and_condition")}</Link>
                    </li>
                    <li>
                      <FaAngleDoubleRight />{" "}
                      <Link href="/data_protection">
                        {t("menu.data_protection")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="solar_footer_contact">
                <h3>{t("heading.contact_us")}</h3>
                <div className="solar_information">
                  <ul>
                    <li>
                      <FaMapMarkerAlt /> Eiswerderstr. 16-18 13585 Berlin
                      Deutschland
                    </li>
                    <li>
                      <FaGlobeAsia /> www.renevatec.de ,www.renevatec.com
                    </li>
                    <li>
                      <FaEnvelope />
                      <a
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                        }}
                        href="mailto:info@renevatec.de"
                      >
                        {" "}
                        info@renevatec.de
                      </a>
                    </li>
                  </ul>
                </div>
                <p>{t("menu.call_now")}</p>
                <a style={{ textDecoration: "none" }} href="tel:0800 00 444 33">
                  {" "}
                  <h1 className="text-white">0800 00 444 33</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="solar_copyright">
          <p dangerouslySetInnerHTML={{ __html: t("footer.para") }} />
        </div>
      </div>
    </div>
    // <div classNameName="footer">
    //     <div classNameName="content ">
    //         <div classNameName="p-4 text-center">
    //             <p dangerouslySetInnerHTML={{ __html: t('footer.para') }} />
    //         </div>
    //     </div>
    // </div>
  );
}
