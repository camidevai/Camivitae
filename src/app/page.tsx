
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <main className="flex flex-col items-center gap-8 glass p-12 rounded-2xl shadow-2xl border border-white/10 max-w-2xl w-full">
        <div className="relative flex place-items-center">
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            Camivitae
          </h1>
        </div>

        <p className="text-lg text-slate-300 max-w-[40ch] leading-relaxed">
          Transform your CV into an ATS-friendly format with the power of modern parsing.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 font-semibold text-white shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-800/50 font-medium text-slate-300 transition-all hover:text-white">
            Learn More
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50 w-full text-sm text-slate-500">
          Project Initialized • Next.js 15 • Tailwind 4
        </div>
      </main>
    </div>
  );
}
