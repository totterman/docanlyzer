import { useTranslation } from "react-i18next";
import schema from "../doc-anlyzer-schema.png";
import graph from "../visualisation.png";

export function Schema() {
  const { t } = useTranslation();
  return (
    <div className="container h-full py-2 ml-60 mr-80 border-b border-slate-300 overflow-y-auto">
      <h2 className="font-bold text-6xl mt-6">{t("scA")}</h2>
      <img src={schema} alt="System schema" className="object-cover" />
      <div className="mr-80 mt-6 mb-4">{t("scB")}</div>
      <div className="mr-80 mb-4">{t("scC")}</div>
      <ol className="list-decimal list-inside mr-80">
        <li className="my-2">{t("sc1")}</li>
        <li className="my-2">{t("sc2")}</li>
        <li className="my-2">{t("sc3")}</li>
        <li className="my-2">{t("sc4")}</li>
        <li className="my-2">{t("sc5")}</li>
        <li className="my-2">{t("sc6")}</li>
        <li className="my-2">{t("sc7")}</li>
      </ol>
      <h2 className="font-bold text-3xl mt-10 pt-2 border-t border-slate-300 overflow-y-auto">
        {t("scD")}
      </h2>
      <img src={graph} alt="Database graph" className="object-cover" />
      <div className="mr-80 mb-4">{t("scE")}</div>
      <h2 className="font-bold text-3xl mt-10 mr-80 pt-2 border-t border-slate-300 overflow-y-auto">
        {t("scF")}
      </h2>
      <div className="mr-80 mt-4 pb-2 border-b border-slate-300 overflow-y-auto">
        {t("scG")}
      </div>
    </div>
  );
}
