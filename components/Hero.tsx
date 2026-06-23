import RhemaLogo from "./RhemaLogo";

const STATS = [
  { value: "400+", label: "Children" },
  { value: "5", label: "Days" },
  { value: "3–16", label: "Ages" },
];

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden text-white">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-purple-brand/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-white p-2 shadow-lg">
            <RhemaLogo className="h-12 w-auto sm:h-14" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Rhema Living Word Global Ministries
            </p>
            <p className="text-sm text-white/80">Kaduna, Nigeria</p>
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              Vacation Bible School
            </span>
            <span className="rounded-full bg-orange-brand px-4 py-1 text-sm font-bold text-white shadow-md">
              2026
            </span>
          </div>

          <h1 className="mb-3 text-5xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl">
            ILLUMINATE!
          </h1>
          <p className="mb-1 text-xl font-medium text-orange-brand sm:text-2xl">
            Light in the Darkness
          </p>
          <p className="mb-6 text-sm italic text-white/50">Matthew 5:14</p>

          <p className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-base font-semibold backdrop-blur-sm sm:text-lg">
            <span className="text-orange-brand">📅</span>
            3rd – 7th August 2026
          </p>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-white/80">
            Bible Study, Crafts, Music, Fun Games, Lunch &amp; So Much More!
          </p>

          <div className="inline-flex rounded-xl border border-orange-brand/30 bg-orange-brand/15 px-4 py-2.5 text-sm text-white/90">
            <span className="font-semibold text-orange-brand">Special Feature ·</span>
            <span className="ml-1.5">Mentorship Class for Ages 14–16</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:max-w-md sm:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 text-center backdrop-blur-sm sm:px-4"
            >
              <p className="text-2xl font-extrabold text-orange-brand sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
