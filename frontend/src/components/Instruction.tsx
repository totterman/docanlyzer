import { useTranslation } from "react-i18next";

export function Instruction() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto h-40 px-4 py-2 border-b border-slate-300">
      <h1 className="text-3xl py-4">{t("instructions")}</h1>
      <div className="left">
        {t("instruction1")} {t("instruction2")}
      </div>
      <div className="left">
        <span className="font-semibold">{t("instruction3")}</span> {t("instruction4")} {t("instruction5")}
      </div>
      <div className="left">
        {t("instruction6")}
      </div>
    </div>
  );
}
