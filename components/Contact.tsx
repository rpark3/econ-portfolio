import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Contact
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Open to research collaborations, data science roles, and interesting
            conversations. Feel free to reach out.
          </p>
        </div>

        <div className="max-w-lg mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
          <div className="space-y-5">
            <a
              href="mailto:park.ryan@northeastern.edu"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-light text-primary">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">
                  Email
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                  park.ryan@northeastern.edu
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ryan-park-m03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-light text-primary">
                <LinkedinIcon size={18} />
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">
                  LinkedIn
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                  linkedin.com/in/ryan-park-m03
                </p>
              </div>
            </a>

            <a
              href="https://github.com/rpark3/ECON3916-Statistical-Machine-Learning"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-light text-primary">
                <GithubIcon size={18} />
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">
                  GitHub
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                  github.com/rpark3
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">
                  Location
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Greenwich, CT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
