export default function VenueContact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="card-glass rounded-2xl p-6 sm:p-8">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Venue &amp; Contact
        </h3>
        <p className="mb-4 leading-relaxed text-white/80">
          📍 N35 Church Road, Rhema Living Word Church, Romi
        </p>
        <p className="text-sm text-white/70">
          For registrations:{" "}
          <a href="tel:08035008078" className="text-orange-brand hover:underline">
            08035008078
          </a>
          {" / "}
          <a href="tel:08028186099" className="text-orange-brand hover:underline">
            08028186099
          </a>
        </p>
      </div>
    </section>
  );
}
