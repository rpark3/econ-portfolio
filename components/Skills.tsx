interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Libraries",
    skills: [
      { name: "Python", level: 95 },
      { name: "pandas", level: 90 },
      { name: "scikit-learn", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Plotly", level: 80 },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git", level: 85 },
      { name: "Jupyter", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    category: "Methods",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Causal Inference", level: 80 },
      { name: "Statistical Modeling", level: 85 },
      { name: "Data Visualization", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Toolkit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Skills
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Technologies and methods I work with regularly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
