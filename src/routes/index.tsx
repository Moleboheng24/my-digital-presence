import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero.jpg";
import cvAsset from "@/assets/cv.pdf.asset.json";
import {
  profile,
  technicalSkills,
  softSkills,
  projects,
  education,
  experience,
} from "@/components/portfolio/data";

const title = "Moleboheng Mavis Hlalele — Junior Software Engineer";
const description =
  "Portfolio of Moleboheng Mavis Hlalele, a WeThinkCode_ software engineering graduate in Johannesburg: projects, skills, education and contact details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          address: profile.location,
          alumniOf: "WeThinkCode_",
        }),
      },
    ],
  }),
  component: Home,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#timeline", label: "Path" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body antialiased">
      <nav className="sticky top-0 z-30 bg-cream/85 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg flex items-center gap-2">
            <span className="size-8 rounded-2xl bg-berry grid place-items-center text-cream text-sm">
              M
            </span>
            Mavis<span className="text-berry">.</span>
          </a>
          <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-mutedink">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={cvAsset.url}
            download="Moleboheng-Hlalele-CV.pdf"
            className="font-display font-semibold text-sm bg-ink text-cream px-4 py-2 rounded-full ring-1 ring-black/5 hover:bg-berry transition-colors"
          >
            Download CV
          </a>
        </div>
      </nav>

      <header id="top" className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint mb-5 animate-pop">
              {profile.role} · {profile.location}
            </p>
            <h1 className="font-display font-bold leading-[0.95] text-5xl sm:text-7xl lg:text-8xl tracking-tight text-balance animate-pop [animation-delay:80ms]">
              Hi, I'm Mavis<span className="text-berry">.</span> I build dependable, thoughtful
              software.
            </h1>
            <p className="mt-6 text-lg text-mutedink max-w-[46ch] text-pretty animate-pop [animation-delay:160ms]">
              WeThinkCode_ graduate from Johannesburg, turning clean logic and careful problem
              solving into software people can rely on.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-pop [animation-delay:240ms]">
              <a
                href="#projects"
                className="font-display font-semibold bg-berry text-cream px-6 py-3 rounded-full ring-1 ring-black/5 hover:bg-ink transition-colors"
              >
                View my work
              </a>
              <a
                href={cvAsset.url}
                download="Moleboheng-Hlalele-CV.pdf"
                className="font-display font-semibold bg-cream text-ink px-6 py-3 rounded-full ring-1 ring-line hover:ring-ink/30 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="md:col-span-5 animate-popscale [animation-delay:200ms]">
            <img
              src={heroImage}
              width={1024}
              height={1280}
              alt="Illustration of a code editor and terminal windows in pastel colours"
              className="w-full aspect-[4/5] object-cover rounded-[2.5rem] bg-sky-soft outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </header>

      <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 border-t border-line">
        <div className="grid md:grid-cols-12 gap-10 items-center animate-pop">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-berry mb-4">(a) About</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-balance">
              Curious, resilient, and always learning.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-pretty">
              I'm a motivated software engineering graduate trained at WeThinkCode_ for 16 months,
              where I built strong problem-solving skills through hands-on, real-world projects. I
              enjoy breaking complex problems into manageable pieces, working closely with a team,
              and writing clean, reliable code I'd be happy to hand to a colleague. I'm excited to
              start my career in a fast-paced digital product engineering environment.
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "16", label: "Months training", tone: "bg-berry-soft" },
            { value: "242", label: "Credits passed", tone: "bg-mint-soft" },
            { value: "3", label: "Roles at WeThinkCode_", tone: "bg-sun-soft" },
            { value: "2", label: "Core languages", tone: "bg-lilac-soft" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-3xl ${stat.tone} p-5 animate-pop`}
              style={{ animationDelay: `${120 + i * 60}ms` }}
            >
              <p className="font-display font-bold text-3xl">{stat.value}</p>
              <p className="font-mono text-xs uppercase tracking-wider text-mutedink mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 border-t border-line">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint mb-4 animate-pop">
          (b) Skills
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-balance mb-10 animate-pop [animation-delay:80ms]">
          What I bring to the table
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-cream ring-1 ring-line p-6">
            <h3 className="font-display font-semibold text-xl mb-4 flex items-center gap-2">
              <span className="size-6 rounded-lg bg-sky-soft grid place-items-center text-sky text-xs">
                T
              </span>
              Technical
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-sky-soft text-sky font-medium text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-cream ring-1 ring-line p-6">
            <h3 className="font-display font-semibold text-xl mb-4 flex items-center gap-2">
              <span className="size-6 rounded-lg bg-berry-soft grid place-items-center text-berry text-xs">
                S
              </span>
              Soft skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-berry-soft text-berry font-medium text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 border-t border-line">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun mb-4 animate-pop">
          (c) Selected work
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-balance mb-10 animate-pop [animation-delay:80ms]">
          Things I've made
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="rounded-3xl bg-cream ring-1 ring-line p-5 flex flex-col animate-pop"
              style={{ animationDelay: `${120 + i * 60}ms` }}
            >
              <img
                src={project.image}
                width={1024}
                height={768}
                loading="lazy"
                alt={`${project.name} project illustration`}
                className="w-full aspect-[4/3] object-cover rounded-2xl outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="font-display font-semibold text-lg mt-4">{project.name}</h3>
              <p className="text-sm text-mutedink mt-2 flex-1 text-pretty">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full bg-sky-soft text-sky text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 border-t border-line">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-lilac mb-4 animate-pop">
          (d) My path
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-balance mb-12 animate-pop [animation-delay:80ms]">
          Education &amp; experience
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display font-semibold text-lg mb-5">Education &amp; certifications</h3>
            <ol className="relative border-l-2 border-line pl-6 space-y-7">
              {education.map((item, i) => (
                <li
                  key={item.title}
                  className="relative animate-pop"
                  style={{ animationDelay: `${120 + i * 60}ms` }}
                >
                  <span className="absolute -left-[31px] top-1 size-4 rounded-full bg-lilac ring-4 ring-cream" />
                  <p className="font-mono text-xs uppercase tracking-wider text-mutedink">
                    {item.period}
                  </p>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-mutedink">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-5">Experience</h3>
            <ol className="relative border-l-2 border-line pl-6 space-y-7">
              {experience.map((item, i) => (
                <li
                  key={item.title}
                  className="relative animate-pop"
                  style={{ animationDelay: `${120 + i * 60}ms` }}
                >
                  <span className="absolute -left-[31px] top-1 size-4 rounded-full bg-berry ring-4 ring-cream" />
                  <p className="font-mono text-xs uppercase tracking-wider text-mutedink">
                    {item.period}
                  </p>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-mutedink">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 border-t border-line">
        <div className="rounded-[2.5rem] bg-ink text-cream p-8 sm:p-12 animate-pop">
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-balance">
            Let's build something good.
          </h2>
          <p className="mt-4 text-cream/70 max-w-[46ch] text-pretty">
            I'm open to junior roles, internships and graduate programmes. Email is the fastest way
            to reach me.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="font-display font-semibold bg-berry text-cream px-6 py-3 rounded-full hover:bg-sun hover:text-ink transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-display font-semibold bg-cream/10 text-cream px-6 py-3 rounded-full hover:bg-cream/20 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-display font-semibold bg-cream/10 text-cream px-6 py-3 rounded-full hover:bg-cream/20 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="font-display font-semibold bg-cream/10 text-cream px-6 py-3 rounded-full hover:bg-cream/20 transition-colors"
            >
              {profile.phone}
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-display font-semibold">
          Mavis<span className="text-berry">.</span>
        </p>
        <p className="font-mono text-xs text-mutedink">
          © {new Date().getFullYear()} · Built with care in Johannesburg
        </p>
      </footer>
    </div>
  );
}
