"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import Link from "next/link";
import Image from "next/image";
import facebookLogo from "@/../public/fbIcon.webp";
import instaLogo from "@/../public/instaIcon.webp";
import linkedinLogo from "@/../public/Linkedin.webp";
import githubLogoLight from "@/../public/gitHubWhite.webp";
import githubLogoDark from "@/../public/gitHubBlack.webp";
import { useTheme } from "../../../../ThemeContext";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const { theme } = useTheme();
  let githubLogo = theme === "dark" ? githubLogoLight : githubLogoDark;

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="w-full xl:w-[80%] py-48 flex flex-col-reverse md:flex-row justify-center items-center min-h-screen ">
      <div className="mt-12 md:mt-0 pb-12 md:pb-0 pr-16 border-t-2 md:border-t-0  border-b-2 md:border-b-0 md:border-r-2 border-[rgb(var(--accent-rgb))]">
        <h1 className="text-2xl font-extrabold pb-4 pt-4">Chris Depta</h1>
        <p>Sittenbacherstrasse 8</p>
        <p className="pb-4 border-b-2 border-[rgb(var(--accent-rgb))]">
          90482 Nürnberg
        </p>
        <h1 className="text-2xl font-extrabold pb-4 pt-4 ">Kontakt</h1>
        <p>tel. +49 1725378432</p>
        <p className="pb-4 border-b-2 border-[rgb(var(--accent-rgb))]">
          email. dev(@)deptachris.de
        </p>
        <h1 className="text-2xl font-extrabold pb-4 pt-4">Soziale Medien</h1>
        <Link
          href="https://www.facebook.com/profile.php?id=61566083339386"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 hover:text-[rgb(var(--accent-rgb))] textShadow ">
          <Image
            src={facebookLogo}
            alt="facebookLogo"
            width={30}
            height={30}
            className="mx-2"
          />
          Facebook
        </Link>
        <Link
          href="https://www.instagram.com/deptachris.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 hover:text-[rgb(var(--accent-rgb))] textShadow ">
          <Image
            src={instaLogo}
            alt="instaLogo"
            width={30}
            height={30}
            className="mx-2"
          />
          Instagram
        </Link>
        <Link
          href="https://www.linkedin.com/in/christoph-depta-09683221a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 hover:text-[rgb(var(--accent-rgb))] textShadow ">
          <Image
            src={linkedinLogo}
            alt="linkedinLogo"
            width={30}
            height={30}
            className="mx-2"
          />
          LinkedIn
        </Link>
        <Link
          href="https://github.com/ChrisDepta"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center py-2 hover:text-[rgb(var(--accent-rgb))] textShadow ">
          <Image
            src={githubLogo}
            alt="githubLogo"
            width={30}
            height={30}
            className="mx-2"
          />
          Github
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pl-0 md:pl-16 flex flex-col justify-start items-end">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[rgb(var(--accent-rgb))]">
            Name und Vorname
          </label>
          <input
            type="text"
            placeholder="Dein Name..."
            className="w-80 xl:w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[rgb(var(--accent-rgb))] focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[rgb(var(--accent-rgb))]">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-80 md:w-80 xl:w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[rgb(var(--accent-rgb))] focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[rgb(var(--accent-rgb))]">
            Nachricht
          </label>
          <textarea
            rows={4}
            placeholder="Schreibe deine Nachricht..."
            className="w-80 md:w-80 xl:w-96 resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[rgb(var(--accent-rgb))] focus:shadow-md"
            {...register("message", { required: true })}></textarea>
        </div>
        <div>
          {/* <button className="rounded-md text-xl font-extrabold bg-gradient-to-br from-dcblue via-dcturkis to-dcturkis  hover:bg-gradient-to-tl py-2 px-6 text-white outline-none w-auto h-auto transition-colors hover:scale-105">
           */}
          <button className="schreibeButton">Senden</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
