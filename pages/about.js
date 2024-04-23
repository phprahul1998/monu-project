import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  const { t } = useTranslation("en", { useSuspense: false });
  return (
    <div className="container-fluid p-0 m-0">
      <div
        className="container"
        style={{ marginBottom: "150px", overflow: "hidden" }}
      >
        {" "}
        <div className="row p-2">
          <div className="col-md-6">
            <div className="single-awesome-project">
              <div className="awesome-img">
                <img src="img/12_Pic1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2
              className="p-2 left-headline"
              dangerouslySetInnerHTML={{
                __html: t("about_us_page.heading"),
              }}
            />
            <p> {t("about_us_page.para")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
