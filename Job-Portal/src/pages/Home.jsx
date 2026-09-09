import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-amber-50 px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Find Your Dream Job
        </h1>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#2a1c12] shadow-[0_30px_80px_rgba(42,28,18,0.18)] md:grid md:grid-cols-2">
          <div className="h-[300px] w-full md:h-full">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Professionals reviewing job opportunities"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-6 text-white md:p-10">
            <span className="mb-3 inline-flex w-fit rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-200">
              Career Platform
            </span>
            <h2 className="text-2xl font-bold leading-tight md:text-4xl">
              Discover roles that match your ambition.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-200 md:text-lg">
              Our platform connects talented people with forward-thinking companies. Explore jobs,
              discover opportunities, and take the next step toward a career you love.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300">
                Explore Jobs
              </button>
              <button className="rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
