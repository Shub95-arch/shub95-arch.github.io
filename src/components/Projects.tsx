import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    {
      title: "svCAT - Ai Powered Watchdog",
      description:
        "A real-time watchdog system to monitor user activity and detect malicious behavior before exploitation. Built a high throughput anomaly detection pipeline using custom ML models, integrated a self-hosted LLM for root cause analysis, and deployed the system across distributed environments for proactive security and performance monitoring, targeting each user separately.",
      image: "/images/sv.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "ReactJs",
        "WebSockets",
        "Node.js",
        "MongoDB",
        "NGINX",
        "AWS",
        "Python",
        "LLM (PHI-3.1)",
        "Isolation Forest",
      ],
      github: "https://github.com/Shub95-arch/svCAT",
      external: "https://svcat.online/",
      featured: true,
      stars: 1200,
    },
    {
      title: "Email Ease",
      description:
        "An email broadcasting platform allowing users to send email campaigns via custom SMTP servers. Integrated CRM for campaign tracking, validated email security protocols, and added Telegram bot notifications for real-time updates and logs.",
      image: "/images/smtp.PNG?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Node.js",
        "Pug.js",
        "Multer",
        "Redis",
        "Nodemailer",
        "MongoDB",
        "Zoho Mail",
        "SMTP",
      ],
      github: "https://github.com/Shub95-arch/email_marketing",
      external: "https://mail.securenet.network/",
      featured: true,
      stars: 850,
    },
    {
      title: "DTMF (Dual Tone Multi-Frequency) Call Handler",
      description:
        "Developed a Telegram bot capable of initiating voice calls and detecting Dual-Tone Multi-Frequency (DTMF) signals in real-time during the call. This enables interactive voice-based control through keypad tones, useful for automated systems or remote input collection.",
      image: "/images/dtmf.png?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Node.js",
        "Telegram Bot API",
        "Twilio Voice",
        "Asterisk",
        "Express.js",
        "MongoDB",
      ],
      // github: "https://github.com",
      // external: "https://www.newline.co/courses/build-a-spotify-connected-app",
      featured: true,
      stars: 650,
    },
  ];

  const otherProjects = [
    {
      title: "RVC Model",
      description:
        "Developed a realtime voice conversion system that transforms mic input into a trained target voice. Cleaned and processed a large dataset, trained the model for accurate conversion, and optimized performance for faster and higher quality results",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "WebRTC",
        "NumPy",
        "Google Collab",
        "Cuda Audio",
      ],
      // github: "https://github.com",
      // external: "https://github.com",
      stars: 45,
    },
    {
      title: "Anomaly Detection Tool",
      description:
        "A web based tool for detecting anomalies in datasets using machine learning. Users can upload data, and the system automatically identifies outliers through backend analysis",
      technologies: [
        "PugJS",
        "MongoDB",
        "Nodejs",
        "Express",
        "Python",
        "ML",
        "Isolation Forest",
        "Flask",
      ],
      github: "https://github.com/Shub95-arch/anomaly-detection",
      external: "https://anomaly.securenet.org.in/",
      stars: 120,
    },
    {
      title: "UniCollab Social Media App",
      description:
        "Built a cross-platform app for university students to network, access academic resources, track attendance, and find events and jobs, with features like AR campus maps and a peer marketplace",
      technologies: [
        "Flutter",
        "Node.js",
        "Express.js",
        "MongoDB",
        "WebSockets",
        "ARCore",
        "Firebase",
      ],
      github:
        "https://github.com/Shub95-arch/Social-media-app-for-colleges-and-universities",
      // external: "https://github.com",
      stars: 89,
    },
    {
      title: "Dynamic Rate Limiter",
      description:
        "Developed a scalable rate limiting system using sliding window logic to prevent DoS and brute-force attacks by monitoring and controlling IP-based request traffic",
      technologies: ["Python", "Node.js", "Redis", "Nginx", "FastAPI"],
      github: "https://github.com/Shub95-arch/Advance-Rate-Limiter-Redis",
      // external: "https://github.com",
      stars: 67,
    },
    {
      title: "Agro Aid",
      description:
        "An app that identifies plant diseases from leaf images using image analysis and machine learning. Users can upload photos, and the app provides instant disease diagnosis and relevant information",
      technologies: [
        "PHP",
        "Javascript",
        "Mapbox API",
        "Google Cloud",
        "TensorFlow",
        "ML",
        "",
      ],
      github: "https://github.com/Shub95-arch/crop-yield-ai",
      // external: "javascript:void(0);",
      stars: 34,
    },
    {
      title: "Modlishka",
      description:
        "Tweaked Modlishka as a reverse proxy based phishing framework that intercepts user traffic, rewrites web pages in real time, and simulates phishing attacks. Used it to analyze user behavior and identify security vulnerabilities for improved threat detection",
      technologies: [
        "Go (Golang)",
        "Nginx",
        "AWS",
        "Shell Scripting",
        "Modlishka Core",
      ],
      // github: "https://github.com",
      // external: "https://github.com",
      stars: 156,
    },
  ];

  return (
    <section id="projects" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-10 flex items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${isDark ? "text-slate-200" : "text-slate-900"}`}
        >
          <span
            className={`font-mono text-xl mr-2 ${
              isDark ? "text-emerald-400" : "text-slate-600"
            }`}
          >
            03.
          </span>
          Some Things I've Built
          <div
            className={`ml-8 h-px flex-1 max-w-xs ${
              isDark ? "bg-slate-600" : "bg-slate-300"
            }`}
          ></div>
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-4 items-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${index % 2 === 1 ? "md:text-right" : ""}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <p
                  className={`font-mono text-sm mb-2 ${
                    isDark ? "text-emerald-400" : "text-slate-600"
                  }`}
                >
                  Featured Project
                </p>
                <h3
                  className={`text-2xl font-semibold mb-4 transition-colors duration-200 ${
                    isDark
                      ? "text-slate-200 hover:text-emerald-400"
                      : "text-slate-900 hover:text-slate-700"
                  }`}
                >
                  {project.title}
                </h3>
                <div
                  className={`p-6 rounded shadow-lg mb-4 border transition-all duration-300 ${
                    isDark
                      ? "bg-slate-800/90 backdrop-blur-sm border-slate-700/50 hover:border-emerald-400/30"
                      : "bg-white/90 backdrop-blur-sm border-slate-200/50 hover:border-slate-400/30"
                  }`}
                >
                  <p
                    className={`leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-4 text-sm font-mono mb-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  } ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className={`transition-colors duration-200 ${
                        isDark
                          ? "hover:text-emerald-400"
                          : "hover:text-slate-800"
                      }`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex items-center space-x-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <div
                    className={`flex items-center space-x-1 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {/* <Star size={16} className="text-yellow-400" />
                    <span className="text-sm font-mono">{project.stars}</span> */}
                  </div>
                  {project.github?.trim() && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-200 transform hover:scale-110 ${
                        isDark
                          ? "text-slate-400 hover:text-emerald-400"
                          : "text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.external?.trim() && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-200 transform hover:scale-110 ${
                        isDark
                          ? "text-slate-400 hover:text-emerald-400"
                          : "text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-2 ${
              isDark ? "text-slate-200" : "text-slate-900"
            }`}
          >
            Other Noteworthy Projects
          </h3>
          <a
            href="#"
            className={`font-mono text-sm hover:underline transition-colors duration-200 ${
              isDark
                ? "text-emerald-400 hover:text-blue-400"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            view the archive
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded border backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                isDark
                  ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 hover:border-emerald-400/30"
                  : "bg-white/50 border-slate-200/50 hover:bg-slate-50/50 hover:border-slate-400/30"
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <Folder
                  className={`transition-colors duration-200 ${
                    isDark
                      ? "text-emerald-400 group-hover:text-blue-400"
                      : "text-slate-600 group-hover:text-slate-800"
                  }`}
                  size={40}
                />
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex items-center space-x-1 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {/* <Star size={14} className="text-yellow-400" />
                    <span className="text-xs font-mono">{project.stars}</span> */}
                  </div>
                  {project.github?.trim() && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-200 transform hover:scale-110 ${
                        isDark
                          ? "text-slate-400 hover:text-emerald-400"
                          : "text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.external?.trim() && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-200 transform hover:scale-110 ${
                        isDark
                          ? "text-slate-400 hover:text-emerald-400"
                          : "text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h4
                className={`text-xl font-semibold mb-3 transition-colors duration-200 ${
                  isDark
                    ? "text-slate-200 group-hover:text-emerald-400"
                    : "text-slate-900 group-hover:text-slate-700"
                }`}
              >
                {project.title}
              </h4>
              <p
                className={`text-sm mb-4 leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>
              <ul
                className={`flex flex-wrap gap-3 text-xs font-mono ${
                  isDark
                    ? "text-slate-400 group-hover:text-emerald-400"
                    : "text-slate-600 group-hover:text-slate-800"
                } transition-colors duration-200`}
              >
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://github.com/Shub95-arch"
            target="_blank"
            rel="noopener noreferrer"
            className={`group px-7 py-4 border rounded font-mono transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden ${
              isDark
                ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 hover:shadow-emerald-400/25"
                : "border-slate-600 text-slate-600 hover:bg-slate-100 hover:shadow-slate-400/25"
            }`}
          >
            <span className="relative z-10">Show More</span>
            <div
              className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isDark ? "bg-emerald-400/5" : "bg-slate-100/50"
              }`}
            ></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
