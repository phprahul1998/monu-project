import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Agb() {
  const { t } = useTranslation("en", { useSuspense: false });
  return (
    <div className="container-fluid p-0 m-0">
      <div
        className="container"
        style={{ marginBottom: "150px", overflow: "hidden" }}
      >
        {" "}
        <div className="row">
          <div className="col-12 agb">
            <p
              dangerouslySetInnerHTML={{
                __html: t("agb"),
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
