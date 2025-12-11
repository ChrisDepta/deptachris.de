"use client"
import content from "@/db/db.json";
import { useTranslation } from "react-i18next";


export default function DatenschutzComponent() {
  const { t } = useTranslation();
  const data = content.impressum;

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen py-24 px-2 md:px-0 bg-gradient-to-br from-white via-white to-primary/5 dark:from-background dark:via-background dark:to-primary/5">
      <h1 className="text-5xl md:text-6xl py-8 font-black text-primary dark:text-cyan-300 mb-8 text-center tracking-tight drop-shadow-lg font-sans z-30 relative" style={{ letterSpacing: "-0.03em", marginTop: "2.5rem" }}>
        {t("footer.datenschutzPage.title")}
      </h1>
      {/* Intro Section */}
      <div className="w-full max-w-4xl mb-8">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-zinc-800">
          <p className="text-lg mb-2 text-zinc-700 dark:text-zinc-200">{t("footer.datenschutzPage.intro1")}</p>
          <p className="text-lg text-zinc-700 dark:text-zinc-200">{t("footer.datenschutzPage.intro2")}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Responsible Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 flex flex-col gap-2 border border-slate-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 font-sans text-zinc-800 dark:text-cyan-200">
            {t("footer.datenschutzPage.responsible")}
          </h2>
          <ul className="space-y-2 text-lg">
            <li><span className="font-semibold">{t("footer.datenschutzPage.mrLabel")}</span> {data.name}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.countryLabel")}</span> {data.land}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.cityLabel")}</span> {data.plz} - {data.stadt}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.streetLabel")}</span> {data.strasse} {data.strassenNr}</li>
            <li><span className="font-semibold">{t("footer.datenschutzPage.emailLabel")}</span> {data.mail}</li>
            <li><span className="font-semibold">{t("footer.datenschutzPage.mobileLabel")}</span> {data.mobile}</li>
          </ul>
        </div>
        {/* Data Policy Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-2 font-sans text-zinc-800 dark:text-cyan-200">2. {t("footer.datenschutzPage.dataCollection")}</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-2 font-sans text-zinc-800 dark:text-cyan-200">3. {t("footer.datenschutzPage.purpose")}</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-2 font-sans text-zinc-800 dark:text-cyan-200">4. {t("footer.datenschutzPage.storage")}</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-2 font-sans text-zinc-800 dark:text-cyan-200">5. {t("footer.datenschutzPage.rights")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
