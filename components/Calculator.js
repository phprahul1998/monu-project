"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { GiConvergenceTarget } from "react-icons/gi";

export default function Calculator() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });

  return (
    <div className=" area-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-4 col-xs-12"></div>

          <div className="calculator">
            <div className="left-headline">
              <h3>Tionscal helping clients in a variety of fields to</h3>
            </div>
            <img src="/img/solor.png" alt="" />
          </div>
          <div className="col-md-7 col-sm-8 col-xs-12"></div>
        </div>
      </div>
    </div>
  );
}
