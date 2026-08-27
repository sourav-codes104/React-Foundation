import { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#071014] px-5 py-6 text-slate-100 sm:px-10 sm:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col justify-between sm:min-h-[calc(100vh-5rem)]">
        <header className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Chronos / 01</p>
            <h1 className="mt-2 text-xl font-medium tracking-tight text-white sm:text-2xl">Digital timekeeper</h1>
          </div>
          <div className="flex items-center gap-2 text-right text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            Live · IST
          </div>
        </header>

        <section className="py-16 sm:py-24" aria-label="Current time">
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.45em] text-slate-500">India Standard Time</p>
          <div className="digital-display relative mx-auto flex max-w-5xl items-center justify-center gap-2 text-[clamp(3.2rem,13vw,10.5rem)] font-bold leading-none tracking-[0.04em] text-cyan-100 sm:gap-5">
            {time.toLocaleTimeString()}
          </div>
          <p className="mt-8 text-center text-sm tracking-[0.18em] text-slate-400 sm:text-base">Live local time</p>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>24-hour display</span>
          <span>Precision refreshed every second</span>
        </footer>
      </div>
    </main>
  );
};

export default App;
