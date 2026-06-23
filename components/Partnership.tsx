import Image from "next/image";
import RhemaLogo from "./RhemaLogo";

export default function Partnership() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="card-glass rounded-2xl p-6 sm:p-8 text-center">
        <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
          In Partnership With
        </h3>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <RhemaLogo className="h-14 w-auto sm:h-16" />
          <span className="text-2xl font-light text-white/40">×</span>
          <Image
            src="/logos/caci.webp"
            alt="CACI Africa Foundation logo"
            width={80}
            height={80}
            className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
          />
        </div>

        <p className="mt-4 text-sm text-white/60">
          Official Partner · VBS 2026
        </p>
      </div>
    </section>
  );
}
