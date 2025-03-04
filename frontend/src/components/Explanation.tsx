import { useTranslation } from "react-i18next";

export function Explanation() {
  const { t } = useTranslation();

  return (
    <div className="container h-full py-2 ml-4 border-b border-slate-300 overflow-y-auto">
      <div className="left">
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
          {t("ex1q")}
        </h3>
        <div className="mx-8">
        {t("ex1a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex2q")}
        </h3>
        <div className="mx-8">
        {t("ex2a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex3q")}
        </h3>
        <div className="mx-8">
        {t("ex3a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex4q")}
        </h3>
        <div className="mx-8">
        {t("ex4a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex5q")}
        </h3>
        <div className="mx-8">
        {t("ex5a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex6q")}
        </h3>
        <div className="mx-8">
        {t("ex6a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex7q")}
        </h3>
        <div className="mx-8">
        {t("ex7a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex8q")}
        </h3>
        <div className="mx-8">
        {t("ex8a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex9q")}
        </h3>
        <div className="mx-8">
        {t("ex9a")}
        </div>
        <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">
        {t("ex10q")}
        </h3>
        <div className="mx-8">
        {t("ex10a1")}<mark>petri@smartbass.fi</mark>{t("ex10a2")}
        </div>
      </div>
    </div>
  );
}
