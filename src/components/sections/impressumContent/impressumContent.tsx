"use client"
import content from "@/db/db.json";
import { useTranslation } from "react-i18next";


export default function Impressum() {
  const { t } = useTranslation();
  const data = content.impressum;

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen py-12 px-2 md:px-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 dark:from-transparent dark:via-transparent dark:to-primary/5">
      <h1 className="text-5xl md:text-6xl font-black text-primary dark:text-cyan-300 mb-8 text-center tracking-tight drop-shadow-lg font-sans" style={{ letterSpacing: "-0.03em" }}>
        {t("footer.impressumPage.ownerTitle")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Address Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 flex flex-col gap-2 border border-slate-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 font-sans text-zinc-800 dark:text-cyan-200">
            {t("footer.impressumPage.addressTitle")}
          </h2>
          <ul className="space-y-2 text-lg">
            <li><span className="font-semibold">{t("footer.impressumPage.nameLabel")}</span> {data.name}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.professionLabel")}</span> {data.beruf}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.countryLabel")}</span> {data.land}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.cityLabel")}</span> {data.plz} - {data.stadt}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.streetLabel")}</span> {data.strasse} {data.strassenNr}</li>
          </ul>
        </div>
        {/* Contact Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 flex flex-col gap-2 border border-slate-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 font-sans text-zinc-800 dark:text-cyan-200">
            {t("footer.impressumPage.contactTitle")}
          </h2>
          <ul className="space-y-2 text-lg">
            <li><span className="font-semibold">{t("footer.impressumPage.emailLabel")}</span> {data.mail}</li>
            <li><span className="font-semibold">{t("footer.impressumPage.mobileLabel")}</span> {data.mobile}</li>
          </ul>
        </div>
      </div>
      {/* Responsible Section */}
      <div className="w-full max-w-4xl mt-10">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 font-sans text-zinc-800 dark:text-cyan-200">
            {t("footer.impressumPage.responsibleTitle")}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">
            {data.gesetz}
          </p>
        </div>
      </div>
    </section>
  );
}
