import SectionHeading from "./SectionHeading";

export default function VenueContact() {
  return (
    <section className="card p-6 sm:p-8">
      <SectionHeading
        label="Venue & Contact"
        title="Join us in Romi"
        description="Register your child or ask questions using the contacts below."
      />

      <div className="space-y-4">
        <div className="flex gap-3 rounded-xl bg-cream p-4">
          <span className="text-xl">📍</span>
          <p className="text-sm leading-relaxed text-ink">
            N35 Church Road, Rhema Living Word Church, Romi, Kaduna
          </p>
        </div>

        <div className="flex gap-3 rounded-xl bg-orange-light p-4">
          <span className="text-xl">📞</span>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-orange-dark">
              For registrations
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a
                href="tel:08035008078"
                className="font-semibold text-navy hover:text-orange-brand"
              >
                0803 500 8078
              </a>
              <a
                href="tel:08028186099"
                className="font-semibold text-navy hover:text-orange-brand"
              >
                0802 818 6099
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
