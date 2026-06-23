type SectionHeadingProps = {
  label: string;
  title?: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-5">
      <p className={`section-label ${light ? "text-orange-brand" : ""}`}>{label}</p>
      {title && (
        <h2
          className={`mt-1 text-xl font-bold tracking-tight sm:text-2xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-1 text-sm leading-relaxed ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
