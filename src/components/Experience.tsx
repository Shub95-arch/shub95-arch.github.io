import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Saturn Infotech",
      title: "ML Engineer",
      duration: "March 2024 - May 2024",
      url: "#",
      responsibilities: [
        "Cleaned and processed a 20-hour dataset to enhance data quality and reduce noise, enabling optimal voice conversion results.",
        "Trained a voice conversion model using TensorFlow, achieving high accuracy and significantly improving model performance.",
        "Applied advanced optimization techniques to reduce training time and boost conversion quality, enhancing overall user satisfaction.",
      ],
    },
    {
      company: "secureNET",
      title: "Founder & CEO",
      duration: "June 2023 - Present",
      url: "https://securenet.network/",
      responsibilities: [
        "Led the development and deployment of secure, real-world SaaS products, including an AI-driven watchdog system, voice conversion tool, and anomaly detection platform.",
        "Designed and implemented full-stack solutions for clients, integrating backend logic, machine learning models, and cloud infrastructure to ensure scalability and security.",
        "Conducted cybersecurity assessments, built custom phishing simulations, and developed defensive tools to identify and mitigate threats for clients across various sectors.",
      ],
    },
    // {
    //   company: "Starry",
    //   title: "Software Engineer Co-op",
    //   duration: "July - December 2016",
    //   url: "https://starry.com/",
    //   responsibilities: [
    //     "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
    //     "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry's proprietary hardware",
    //     "Collaborated with designers and other developers to ensure thoughtful and coherent user experiences across Starry's iOS and Android mobile apps",
    //   ],
    // },
    // {
    //   company: "Scout Studio",
    //   title: "Studio Developer",
    //   duration: "January - June 2016",
    //   url: "https://scout.camd.northeastern.edu/",
    //   responsibilities: [
    //     "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern's IDEA program",
    //     "Developed and delivered technical presentations to members of Scout's Executive Board, including the co-founders of Drift, Freshbooks, and Privy",
    //     "Collaborated with designers and other developers to ensure thoughtful and coherent user experiences across Scout's iOS and Android mobile apps",
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-10 flex items-center ${
            isDark ? "text-slate-200" : "text-slate-900"
          }`}
        >
          <span
            className={`font-mono text-xl mr-2 ${
              isDark ? "text-emerald-400" : "text-slate-600"
            }`}
          >
            02.
          </span>
          Where I've Worked
          <div
            className={`ml-8 h-px flex-1 max-w-xs ${
              isDark ? "bg-slate-600" : "bg-slate-300"
            }`}
          ></div>
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-8 md:mb-0 md:mr-8">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap md:whitespace-normal border-l-2 md:border-l-2 md:border-b-0 border-b-2 transition-all duration-200 ${
                  activeTab === index
                    ? isDark
                      ? "text-emerald-400 border-emerald-400 bg-emerald-400/10"
                      : "text-slate-800 border-slate-600 bg-slate-100"
                    : isDark
                      ? "text-slate-400 border-slate-600 hover:text-emerald-400 hover:bg-slate-800/50"
                      : "text-slate-600 border-slate-300 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            <div className="mb-4">
              <h3
                className={`text-xl font-medium ${
                  isDark ? "text-slate-200" : "text-slate-900"
                }`}
              >
                {experiences[activeTab].title}{" "}
                <span
                  className={isDark ? "text-emerald-400" : "text-slate-600"}
                >
                  @{" "}
                  <a
                    href={experiences[activeTab].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center transition-colors duration-200"
                  >
                    {experiences[activeTab].company}
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </span>
              </h3>
              <p
                className={`font-mono text-sm mt-1 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {experiences[activeTab].duration}
              </p>
            </div>

            <ul className="space-y-3">
              {experiences[activeTab].responsibilities.map(
                (responsibility, index) => (
                  <li
                    key={index}
                    className={`flex items-start ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    <span
                      className={`mr-3 mt-1 flex-shrink-0 ${
                        isDark ? "text-emerald-400" : "text-slate-600"
                      }`}
                    >
                      ▹
                    </span>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
