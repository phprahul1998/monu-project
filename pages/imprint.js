import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Imprint() {
  const { t } = useTranslation("en", { useSuspense: false });
  return (
    <div className="container-fluid p-0 m-0">
      <div className="container" style={{ marginBottom: "150px" }}>
        <div className="row">
          <div className="col-12">
            <p
              dangerouslySetInnerHTML={{
                __html: t("imprint"),
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
