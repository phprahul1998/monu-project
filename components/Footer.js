"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  FaAngleDoubleRight,
  FaMapMarkerAlt,
  FaGlobeAsia,
  FaEnvelope,
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
                <a href="index.html">
                  <img
                    src="img/footer_logo.png"
                    alt="solar-installation-footer-logo"
                  />
                </a>
                <h1
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: t("home.main_heading") }}
                />
                <p className="">{t("home.main_desc", "Default Heading")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="solar_footer_links">
                <h3>{t("heading.use_ful_link")}</h3>
                <div className="solar_links">
                  <ul>
                    <li>
                      <FaAngleDoubleRight /> <a href="#">{t("menu.home")}</a>
                    </li>
                    <li>
                      <FaAngleDoubleRight />{" "}
                      <Link href="/imprint">{t("menu.imprint")}</Link>
                    </li>
                    <li>
                      <FaAngleDoubleRight />{" "}
                      <a href="#">{t("menu.term_and_condition")}</a>
                    </li>
                    <li>
                      <FaAngleDoubleRight />{" "}
                      <a href="#">{t("menu.data_protection")}</a>
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
                      <FaEnvelope /> info@renevatec.de
                    </li>
                  </ul>
                </div>
                <p>{t("menu.call_now")}</p>
                <h1>+49 30 20654716</h1>
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
