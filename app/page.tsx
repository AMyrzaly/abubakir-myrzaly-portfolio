"use client";

import { FormEvent, useEffect, useState } from "react";

const EMAIL = "myrzaly.abubakir@gmail.com";

const experience = [
  {
    dates: "2025 — NOW",
    role: "L2 Software Support Engineer",
    company: "Ataccama",
    detail: "Enterprise data quality platform support across complex customer environments, integrations, access, SSL and production escalations.",
  },
  {
    dates: "2022 — 2025",
    role: "Application Support Analyst",
    company: "Finastra",
    detail: "Supported financial, BI and data platforms across development, UAT and production while coordinating 10–20 daily deployments.",
  },
  {
    dates: "2021 — 2022",
    role: "Application Analyst",
    company: "Ceridian",
    detail: "Resolved business-critical HCM and payroll incidents, including an issue affecting more than 5,000 employee payments.",
  },
  {
    dates: "2018 — 2021",
    role: "Application Developer & Systems Analyst",
    company: "Canadian Imperial Bank of Commerce (CIBC)",
    progression: "Application Developer · Technical System Analyst · Test Analyst",
    detail: "Delivered application, testing and infrastructure work for large-scale banking systems, including a SQL update spanning 12 million clients.",
  },
];

const capabilities = [
  "L2/L3 Production Support",
  "Incident & Problem Management",
  "Root Cause Analysis",
  "SQL & Data Troubleshooting",
  "SaaS & Enterprise Platforms",
  "Cloud & Virtual Desktops",
  "Monitoring & Observability",
  "Release & Deployment Support",
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("abubakir-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("abubakir-theme", theme);
  }, [theme]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "Website visitor");
    const sender = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${sender}\n\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Abubakir Myrzaly, home">AM<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "light"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <span>{theme === "dark" ? "DARK" : "LIGHT"}</span>
          <i aria-hidden="true" />
        </button>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Software Support Engineer · Toronto</p>
          <h1>Calm systems.<br /><em>Clear outcomes.</em></h1>
          <p className="hero-intro">I keep complex software dependable—turning incidents, data issues and technical uncertainty into stable services and confident customers.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Start a conversation <span>↗</span></a>
            <a className="button text-button" href="/documents/Abubakir-Myrzaly-Resume.docx" download>Download résumé <span>↓</span></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img className="portrait-dark" src="/images/abubakir-professional.png" alt="Abubakir Myrzaly wearing a navy blazer" />
            <img className="portrait-light" src="/images/abubakir-casual.png" alt="Abubakir Myrzaly wearing a white shirt" />
          </div>
          <div className="portrait-note"><span>01</span><p>8+ years supporting enterprise technology where reliability matters.</p></div>
        </div>
      </section>

      <section className="impact shell" aria-label="Selected career impact">
        <div className="section-label">Selected impact</div>
        <div className="impact-grid">
          <article><strong>12M</strong><p>client records improved through a major SQL update at CIBC</p></article>
          <article><strong>5K+</strong><p>salary payments protected during a critical payroll incident</p></article>
          <article><strong>1K+</strong><p>students restored after resolving a widespread platform conflict</p></article>
          <article><strong>20+</strong><p>knowledge resources created to strengthen support consistency</p></article>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="section-label">About / 02</div>
        <div className="about-grid">
          <h2>Technology works best when people can <em>trust it.</em></h2>
          <div className="about-copy">
            <p>I’m Abubakir Myrzaly, a software support engineer with experience across enterprise SaaS, fintech, HCM and data platforms. I work at the point where systems, customers and engineering teams meet.</p>
            <p>My approach combines disciplined investigation with clear communication. Whether I’m managing a production escalation, tracing a data issue or improving a support process, the goal is the same: restore confidence and leave the system stronger than I found it.</p>
            <a href="https://www.linkedin.com/in/abubakir-myrzaly-449195124/" target="_blank" rel="noreferrer">View LinkedIn profile ↗</a>
          </div>
        </div>
      </section>

      <section className="capabilities shell">
        <div className="section-label">Core expertise / 03</div>
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <div key={capability}><span>{String(index + 1).padStart(2, "0")}</span><p>{capability}</p><i>↗</i></div>
          ))}
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="section-label">Experience / 04</div>
        <div className="experience-heading">
          <h2>Built in production.</h2>
          <p>A career shaped by high-stakes environments, complex systems and measurable results.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.company}>
              <time>{item.dates}</time>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                {"progression" in item && item.progression ? <p className="progression">{item.progression}</p> : null}
              </div>
              <p className="detail">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="education">
          <span>Education</span>
          <p><strong>Bachelor of Technology, Software Engineering</strong><br />McMaster University</p>
          <p><strong>Advanced Diploma, Software Engineering Technology</strong><br />Centennial College</p>
        </div>
      </section>

      <section className="future-work shell">
        <div className="section-label">Selected work / 05</div>
        <div className="future-card">
          <p>PROJECTS ARE THE NEXT CHAPTER</p>
          <h2>New builds,<br /><em>coming soon.</em></h2>
          <span>This portfolio is designed to grow. Future software and data projects will live here as focused case studies.</span>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-intro">
          <div className="section-label">Contact / 06</div>
          <h2>Let’s make complex<br /><em>feel simple.</em></h2>
          <p>Hiring, collaboration or an interesting technical challenge—tell me what you’re working on.</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a>
        </div>
        <form onSubmit={sendMessage}>
          <label><span>Your name</span><input required name="name" autoComplete="name" placeholder="Jane Smith" /></label>
          <label><span>Your email</span><input required type="email" name="email" autoComplete="email" placeholder="jane@company.com" /></label>
          <label><span>How can I help?</span><textarea required name="message" rows={4} placeholder="A few details about the role, project or idea..." /></label>
          <button className="button primary" type="submit">Prepare email <span>↗</span></button>
          <small>This opens your email app with the message ready to send.</small>
        </form>
      </section>

      <footer className="shell">
        <a className="monogram" href="#top">AM<span>.</span></a>
        <p>Software Support Engineer<br />Toronto, Canada</p>
        <div><a href="https://github.com/AMyrzaly" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/abubakir-myrzaly-449195124/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <p>© {new Date().getFullYear()} Abubakir Myrzaly</p>
      </footer>
    </main>
  );
}
