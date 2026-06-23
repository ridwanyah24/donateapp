export default function VbsBanner() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="card-glass rounded-2xl p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Vacation Bible School
          </span>
          <span className="rounded-full bg-orange-brand px-3 py-0.5 text-sm font-bold text-navy">
            2026
          </span>
        </div>

        <h2 className="mb-1 text-3xl font-extrabold tracking-tight text-orange-brand sm:text-4xl">
          ILLUMINATE!
        </h2>
        <p className="mb-1 text-lg font-medium text-white/90">
          Light in the Darkness
        </p>
        <p className="mb-4 text-sm italic text-white/60">Matt 5:14</p>

        <p className="mb-4 text-base font-semibold text-purple-brand sm:text-lg">
          3rd – 7th August 2026
        </p>

        <p className="mb-3 text-sm leading-relaxed text-white/80">
          <span className="font-semibold text-white">What&apos;s inside:</span>{" "}
          Bible Study, Crafts, Music, Fun Games, Lunch &amp; So Much More!
        </p>

        <p className="rounded-lg bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="font-semibold text-orange-brand">Special Feature:</span>{" "}
          Mentorship Class · Ages 14–16
        </p>
      </div>
    </section>
  );
}
