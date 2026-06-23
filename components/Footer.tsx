import RhemaLogo from "./RhemaLogo";

export default function Footer() {
  return (
    <footer className="bg-navy px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="rounded-xl bg-white p-2">
          <RhemaLogo className="h-10 w-auto" />
        </div>
        <p className="max-w-sm text-base font-medium italic text-white/80">
          &ldquo;Every gift lights a child&apos;s path&rdquo;
        </p>
        <p className="text-sm text-white/50">
          Rhema Living Word Global Ministries · Kaduna, Nigeria
        </p>
        <p className="text-xs text-white/30">VBS 2026 · Illuminate!</p>
      </div>
    </footer>
  );
}
