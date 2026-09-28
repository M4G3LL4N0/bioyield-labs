export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-900/40 bg-[#07140f] px-6 py-12 sm:px-10 sm:py-16">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
          viewBox="0 0 800 480"
          aria-hidden
        >
          <defs>
            <pattern id="field-rows" width="80" height="24" patternUnits="userSpaceOnUse">
              <path d="M0 18 Q40 6 80 18" fill="none" stroke="#4ade80" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="800" height="480" fill="url(#field-rows)" />
          <circle cx="640" cy="90" r="70" fill="none" stroke="#86efac" strokeWidth="1" />
          <circle cx="640" cy="90" r="42" fill="none" stroke="#86efac" strokeWidth="0.7" />
        </svg>
        <div className="relative max-w-2xl">
          <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
            Research
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl">
            Crop-protection research, not a field product.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-emerald-100/75 sm:text-lg">
            BioYield Labs is an early research concept exploring how biological
            approaches to crop protection might be studied with clearer
            questions and honest limits. It is not a production system and it
            does not tell anyone how to make, apply, or deploy a biological agent.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#desk"
              className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-200"
            >
              Contact the research desk
            </a>
            <a
              href="#posture"
              className="inline-flex items-center justify-center rounded-full border border-emerald-200/25 px-6 py-2.5 text-sm font-medium text-emerald-100 transition hover:bg-white/5"
            >
              Read the research posture
            </a>
          </div>
        </div>
      </section>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="How to read this page">
        {[
          ["#boundary", "Public boundary"],
          ["#questions", "Questions"],
          ["#posture", "Posture"],
          ["#desk", "Research desk"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="rounded-full border border-emerald-200/20 px-4 py-2 text-sm text-emerald-100 hover:bg-white/5"
          >
            {label}
          </a>
        ))}
      </nav>
      <p className="mt-3 text-sm text-emerald-100/60">
        Read in this order. Nothing on the page is a procedure.
      </p>

      <section id="boundary" className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Public boundary">
        <article className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-300">On this site</p>
          <p className="mt-3 text-sm leading-7 text-emerald-50">
            The research direction, the questions, and the limits. A visitor can see what the concept is about.
          </p>
        </article>
        <article className="rounded-2xl border border-emerald-900/60 bg-black/30 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-200/70">Not on this site</p>
          <p className="mt-3 text-sm leading-7 text-emerald-100/70">
            Methods, formulations, strain choices, synthesis, application, and anything a person would follow as a procedure.
          </p>
        </article>
      </section>

      <section id="questions" className="mt-12 rounded-2xl border border-emerald-900/50 bg-[#0a1812] p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-emerald-50">Research questions on this page</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-100/70">
          The public site names the direction and the limits. It does not publish
          protocols, formulations, strain selection, synthesis, or application steps.
        </p>
        <ol className="mt-6 space-y-4 text-sm leading-7 text-emerald-100/75">
          <li>
            <span className="font-mono text-xs text-emerald-300">01 · open question</span>
            <span className="ml-3">
              Can biological crop-protection ideas be discussed as research questions
              without turning the website into operational guidance?
            </span>
          </li>
          <li>
            <span className="font-mono text-xs text-emerald-300">02 · open question</span>
            <span className="ml-3">
              What belongs in a public note versus a closed conversation with
              people who already have their own scientific and legal counsel?
            </span>
          </li>
          <li>
            <span className="font-mono text-xs text-emerald-300">03 · open question</span>
            <span className="ml-3">
              How do we keep the page honest that this is a concept, not a
              registered product and not a field recommendation?
            </span>
          </li>
        </ol>
      </section>

      <section id="posture" className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-emerald-900/50 bg-[#0a1812] p-6">
          <h2 className="text-lg font-semibold text-emerald-50">What this is</h2>
          <p className="mt-3 text-sm leading-7 text-emerald-100/70">
            A public note about a research direction: whether biological crop
            protection can be evaluated with more disciplined trial framing and
            less chemical default. Outputs here are conceptual, not advice.
          </p>
        </article>
        <article className="rounded-2xl border border-emerald-900/50 bg-[#0a1812] p-6">
          <h2 className="text-lg font-semibold text-emerald-50">What this is not</h2>
          <p className="mt-3 text-sm leading-7 text-emerald-100/70">
            Not a registered pesticide, not a grower recommendation, not a lab
            protocol, and not a production planning tool. Nothing on this page
            is operational guidance for producing or applying a biological agent.
          </p>
        </article>
      </section>

      <section
        id="desk"
        className="mt-12 rounded-2xl border border-emerald-900/50 bg-[#0a1812] p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-emerald-50">Research desk</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-100/70">
          If you want to talk about the research concept, send a note. This is a
          conversation, not an intake for field work and not a request for
          operational guidance.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:research@bioyield-labs.example?subject=Research%20desk"
            className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-200"
          >
            Email the research desk
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200/25 px-6 py-2.5 text-sm font-medium text-emerald-100 transition hover:bg-white/5"
          >
            About
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200/25 px-6 py-2.5 text-sm font-medium text-emerald-100 transition hover:bg-white/5"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
