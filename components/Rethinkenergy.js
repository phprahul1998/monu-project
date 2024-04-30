"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TiTick } from "react-icons/ti";

export default function Rethinkenergy() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });

  return (
    <div className="project-area area-padding imagegallery">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
            <h2
              className="p-2 left-headline"
              dangerouslySetInnerHTML={{
                __html: t("rethinkenergy.rethinkheading"),
              }}
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-12">
            <div className="card card-01">
              <img
                className="card-img-top"
                src="img/12_Pic1.webp"
                alt="rethink energy "
              />
              <div className="card-body middle">
                <span className="badge-box">
                  <TiTick />
                </span>
                <h5> {t("rethinkenergy.rethinkenergy_page.first_heading")}</h5>
                <Link href="/planning_a_pv_system">
                  <div className="readMorebtn w-100">
                    <span>
                      {" "}
                      {t("rethinkenergy.rethinkenergy_page.readMeMore")}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-12">
            <div className="card card-01">
              <img
                className="card-img-top"
                src="img/12_Pic2.webp"
                alt="rethink energy "
              />
              <div className="card-body middle">
                <span className="badge-box">
                  <TiTick />
                </span>
                <h5> {t("rethinkenergy.rethinkenergy_page.fourth_heading")}</h5>
                <Link href="/key_factor_for_success">
                  <div className="readMorebtn w-100">
                    <span>
                      {" "}
                      {t("rethinkenergy.rethinkenergy_page.readMeMore")}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-12">
            <div className="card card-01">
              <img
                className="card-img-top"
                src="img/12_Pic3.webp"
                alt="rethink energy "
              />
              <div className="card-body middle">
                <span className="badge-box">
                  <TiTick />
                </span>
                <h5> {t("rethinkenergy.rethinkenergy_page.second_heading")}</h5>
                <Link href="/sustainable_investments">
                  <div className="readMorebtn w-100">
                    <span>
                      {" "}
                      {t("rethinkenergy.rethinkenergy_page.readMeMore")}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-12">
            <div className="card card-01">
              <img
                className="card-img-top"
                src="img/12_Pic4.webp"
                alt="rethink energy "
              />
              <div className="card-body middle">
                <span className="badge-box">
                  <TiTick />
                </span>
                <h5> {t("rethinkenergy.rethinkenergy_page.third_heading")}</h5>
                <Link href="/own_electricity_for_hybrid">
                  <div className="readMorebtn w-100">
                    <span>
                      {t("rethinkenergy.rethinkenergy_page.readMeMore")}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
          <p
            className="p-2"
            dangerouslySetInnerHTML={{ __html: t("rethinkenergy.para") }}
          />
        </div> */}
      </div>
    </div>
  );
}
