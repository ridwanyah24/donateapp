import Image from "next/image";

export default function RhemaLogo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logos/rhema.png"
      alt="Rhema Living Word Global Ministries logo"
      width={200}
      height={200}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
