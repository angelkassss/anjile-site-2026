export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-black/60">Toronto • Waterloo • Oakville</p>

          <h1 className="text-5xl font-semibold tracking-tight text-black">
            Dark, clean, and a little electric.
          </h1>

          <p className="max-w-xl text-black/70">
            I build security-minded software, ship projects fast, and document the journey.
            Portfolio + blog + gallery — curated like a moodboard.
          </p>

          <div className="flex flex-wrap gap-3">
            <a className="card rounded-full px-4 py-2 text-sm text-black/80 glow-green" href="https://github.com/angelkassss">
              GitHub
            </a>
            <a className="card rounded-full px-4 py-2 text-sm text-black/80 glow-purple" href="https://www.linkedin.com/in/anjile-kasturi-145068207/">
              LinkedIn
            </a>
            <a className="card rounded-full px-4 py-2 text-sm text-black/80" href="mailto:anjile.kasturi@uwaterloo.ca">
              Email
            </a>
            <a className="card rounded-full px-4 py-2 text-sm text-black/80" href="https://www.youtube.com/@AnjileKasss">
              YouTube
            </a>
            <a className="card rounded-full px-4 py-2 text-sm text-black/80" href="https://substack.com/@godisrealitsme">
              Substack
            </a>
          </div>
        </div>

        <div className="card rounded-3xl p-6">
          <p className="text-black/60 text-sm">Featured</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-black/10 p-4 hover:glow-green transition">
              <p className="text-black font-medium">Project Name</p>
              <p className="text-black/60 text-sm">1–2 lines. What it does + why it matters.</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-4 hover:glow-purple transition">
              <p className="text-black font-medium">Another Project</p>
              <p className="text-black/60 text-sm">Security / software / hardware — whatever your vibe is.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
