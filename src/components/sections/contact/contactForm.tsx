"use client";

import { FC } from "react";
import { motion } from "framer-motion";
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
  const { register, handleSubmit, reset } = useForm<FormData>();

  const { theme } = useTheme();
  let githubLogo = theme === "dark" ? githubLogoLight : githubLogoDark;

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      // Reset formularza po pomyślnym wysłaniu
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-24 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight overflow-hidden"
        >
          <motion.span
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block text-primary"
          >
            Kontakt
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium"
        >
          Lassen Sie uns zusammenarbeiten
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        >
          Haben Sie ein spannendes Projekt im Kopf? Ich freue mich darauf, Ihre Ideen in moderne, 
          benutzerfreundliche Webanwendungen zu verwandeln. Kontaktieren Sie mich für ein unverbindliches Gespräch!
        </motion.p>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Kontaktinformationen Karte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card rounded-3xl p-8 lg:p-10 shadow-xl border border-primary/20 backdrop-blur-sm"
          role="complementary"
          aria-label="Kontaktinformationen"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8" id="contact-info">
            Chris Depta
          </h2>
          
          <div className="space-y-8">
            <div className="bg-secondary/30 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Adresse</h3>
              <address className="not-italic text-foreground space-y-1">
                <p>Sittenbacherstrasse 8</p>
                <p>90482 Nürnberg</p>
              </address>
            </div>
            
            <div className="bg-secondary/30 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Kontakt</h3>
              <div className="space-y-3">
                <p>
                  <span className="sr-only">Telefonnummer: </span>
                  <a href="tel:+491725378432" className="text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    📞 +49 172 5378432
                  </a>
                </p>
                <p>
                  <span className="sr-only">E-Mail-Adresse: </span>
                  <a href="mailto:dev@deptachris.de" className="text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    📧 dev@deptachris.de
                  </a>
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Soziale Medien</h3>
              <nav aria-label="Soziale Medien Links" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61566083339386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary group"
                  aria-label="Besuche mein Facebook Profil (öffnet in neuem Fenster)">
                  <Image
                    src={facebookLogo}
                    alt=""
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                    role="presentation"
                  />
                  <span className="font-medium">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/deptachris.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary group"
                  aria-label="Besuche mein Instagram Profil (öffnet in neuem Fenster)">
                  <Image
                    src={instaLogo}
                    alt=""
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                    role="presentation"
                  />
                  <span className="font-medium">Instagram</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/christoph-depta-09683221a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary group"
                  aria-label="Besuche mein LinkedIn Profil (öffnet in neuem Fenster)">
                  <Image
                    src={linkedinLogo}
                    alt=""
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                    role="presentation"
                  />
                  <span className="font-medium">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/ChrisDepta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary group"
                  aria-label="Besuche mein GitHub Profil (öffnet in neuem Fenster)">
                  <Image
                    src={githubLogo}
                    alt=""
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                    role="presentation"
                  />
                  <span className="font-medium">GitHub</span>
                </Link>
              </nav>
            </div>
          </div>
        </motion.div>
        
        {/* Kontaktformular Karta */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card rounded-3xl p-8 lg:p-10 shadow-xl border border-primary/20 backdrop-blur-sm"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
            Schreiben Sie mir
          </h2>
          
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            role="form"
            aria-labelledby="contact-form-title"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-primary mb-3"
              >
                Name und Vorname <span aria-label="Pflichtfeld" className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ihr vollständiger Name..."
                className="w-full rounded-2xl border border-primary/20 bg-secondary/30 py-4 px-6 text-lg font-medium text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:bg-secondary/50 focus:shadow-lg focus:ring-4 focus:ring-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                aria-required="true"
                aria-describedby="name-error"
                {...register("name", { required: "Name ist erforderlich" })}
              />
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-primary mb-3"
              >
                E-Mail-Adresse <span aria-label="Pflichtfeld" className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="ihre.email@domain.com"
                className="w-full rounded-2xl border border-primary/20 bg-secondary/30 py-4 px-6 text-lg font-medium text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:bg-secondary/50 focus:shadow-lg focus:ring-4 focus:ring-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                aria-required="true"
                aria-describedby="email-error"
                {...register("email", { 
                  required: "E-Mail ist erforderlich",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ungültige E-Mail-Adresse"
                  }
                })}
              />
            </div>
            
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-primary mb-3"
              >
                Nachricht <span aria-label="Pflichtfeld" className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Teilen Sie mir Ihre Ideen und Wünsche mit..."
                className="w-full resize-none rounded-2xl border border-primary/20 bg-secondary/30 py-4 px-6 text-lg font-medium text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:bg-secondary/50 focus:shadow-lg focus:ring-4 focus:ring-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                aria-required="true"
                aria-describedby="message-error"
                {...register("message", { required: "Nachricht ist erforderlich" })}
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
              aria-describedby="submit-description"
            >
              Nachricht senden →
            </motion.button>
            <p id="submit-description" className="sr-only">
              Formular absenden um Nachricht zu versenden
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
