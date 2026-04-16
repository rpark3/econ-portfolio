"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

type Filter = "All" | "Machine Learning" | "NLP" | "Econometrics";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Filter[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Random Forest vs. OLS: California Housing",
    description:
      "Compared Decision Tree, Ridge, and Random Forest on 20,640 California housing observations. RF achieved R² = 0.83, beating Ridge by 24 points. Extracted and visualized feature importance to interpret model decisions.",
    tags: ["Python", "scikit-learn", "matplotlib"],
    category: ["Machine Learning"],
    github:
      "https://github.com/rpark3/ECON3916-Statistical-Machine-Learning/blob/main/Lab%2019/lab-ch19-guided.ipynb",
  },
  {
    title: "FedSpeak Sentiment: NLP on FOMC Minutes",
    description:
      "Built a TF-IDF pipeline analyzing Fed meeting minutes from 2000–2024. Classified hawkish vs. dovish language with 87% accuracy using logistic regression, revealing policy sentiment shifts over two decades.",
    tags: ["Python", "scikit-learn", "NLTK", "Plotly"],
    category: ["NLP", "Machine Learning"],
    github:
      "https://github.com/rpark3/ECON3916-Statistical-Machine-Learning/blob/main/Lab%2023/lab_ch23_guided.ipynb",
  },
  {
    title: "Predicting Recessions with Logistic Regression",
    description:
      "Replicates the Federal Reserve Bank of New York's monthly recession probability model — a real logistic regression used by one of the most important financial institutions in the world.",
    tags: ["Python", "fredapi", "statsmodels", "pandas", "Plotly"],
    category: ["Econometrics", "Machine Learning"],
    github: "https://github.com/rpark3/econ-lab-21",
  },
  {
    title: "Does Job Training Pay Off? Causal Analysis of the LaLonde Dataset",
    description:
      "Evaluated whether participation in the National Supported Work Demonstration causally increases 1978 earnings, or whether observed differences are driven by prior work experience, education, and demographics. Applied OLS regression and controls to test human capital theory against selection bias — distinguishing true program effects from structural inequality.",
    tags: ["Python", "pandas", "statsmodels", "causal inference"],
    category: ["Econometrics"],
    github: "https://github.com/rpark3/ECON3916-Statistical-Machine-Learning/blob/main/Project%201/Econ3916_Project1.ipynb",
  },
];

const filters: Filter[] = ["All", "Machine Learning", "NLP", "Econometrics"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Projects
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A selection of data science and economics research projects.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border ${
                active === f
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary dark:hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6
                         hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/30 dark:hover:border-primary/40
                         transition-all duration-200
                         ${index === visible.length - 1 && visible.length % 3 === 1 ? "lg:col-start-2" : ""}`}
            >
              {/* Accent bar — expands on hover */}
              <div className="h-1 w-12 rounded-full bg-accent mb-5 group-hover:w-20 transition-all duration-300" />

              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <GithubIcon size={15} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <ExternalLink size={15} />
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-400 dark:text-slate-600 mt-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
