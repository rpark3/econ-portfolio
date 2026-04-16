import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="max-w-lg mx-auto md:mx-0 mb-8 bg-[#dce8f7] dark:bg-[#1a2744] rounded-2xl px-5 py-5">
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                Economics & Data Science
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4">
                Ryan Park
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 mb-3">
                BS Biology, Minor in Economics · Northeastern University
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                I&apos;m a pre-med student at Northeastern University with a
                strong interest in economics and how market forces shape
                healthcare, policy, and patient outcomes. I use data science and
                statistical modeling to bridge the gap between biological systems
                and economic decision-making — turning complex data into
                insight that matters.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:opacity-85 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center md:justify-start gap-5 mt-8">
              <a
                href="mailto:park.ryan@northeastern.edu"
                aria-label="Email"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-park-m03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/rpark3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 ring-4 ring-accent shadow-xl">
              <Image
                src="/HeadshotPFP.png"
                alt="Ryan Park"
                fill
                className="object-cover object-[58%_8%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
