import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Services() {
  const { t } = useTranslation("en", { useSuspense: false });
  return (
    <div className="container-fluid p-0 m-0">
      <div className="container " style={{ marginBottom: "180px" }}>
        <div className="row p-2">
          <div className="col-md-6">
            <div className="single-awesome-project">
              <div className="awesome-img">
                <img src="img/12_Pic2.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2
              className="p-2 left-headline"
              dangerouslySetInnerHTML={{
                __html: t("service_page.heading"),
              }}
            />
            <p> {t("service_page.para")}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: t("service_page.list"),
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: t("service_page.experties"),
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
