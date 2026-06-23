import RhemaLogo from "./RhemaLogo";

export default function Header() {
  return (
    <header className="relative overflow-hidden px-4 pt-6 pb-4">
      <div className="flashlight-beam pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-3xl items-center gap-4">
        <RhemaLogo className="h-14 w-auto sm:h-16" />
        <div>
          <h1 className="text-lg font-bold leading-tight sm:text-xl">
            Rhema Living Word
          </h1>
          <p className="text-sm text-white/70 sm:text-base">Global Ministries</p>
        </div>
      </div>
    </header>
  );
}
