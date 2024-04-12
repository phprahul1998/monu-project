import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Imprint() {
  const { t } = useTranslation("en", { useSuspense: false });
  return (
    <div>
      <h2>Imprint</h2>
    </div>
  );
}
