import Image from "next/image";
import RhemaLogo from "./RhemaLogo";

export default function Partnership() {
  return (
    <section className="border-y border-cream-dark bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="section-label mb-6">In Partnership With</p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-2xl border border-cream-dark bg-cream p-3 shadow-sm">
              <RhemaLogo className="h-14 w-auto sm:h-16" />
            </div>
            <p className="max-w-[140px] text-xs font-medium text-muted">
              Rhema Living Word Global Ministries
            </p>
          </div>

          <span className="text-2xl font-light text-cream-dark">×</span>

          <div className="flex flex-col items-center gap-2">
            <div className="rounded-2xl border border-cream-dark bg-cream p-3 shadow-sm">
              <Image
                src="/logos/caci.webp"
                alt="CACI Africa Foundation logo"
                width={80}
                height={80}
                className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
              />
            </div>
            <p className="max-w-[140px] text-xs font-medium text-muted">
              CACI Africa Foundation
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-navy">
          Official Partner · VBS 2026
        </p>
      </div>
    </section>
  );
}
