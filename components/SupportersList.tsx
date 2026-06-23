import SectionHeading from "./SectionHeading";

type Supporter = {
  name: string;
  date: string;
};

type SupportersListProps = {
  supporters: Supporter[];
};

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/);
  const initials =
    parts.length >= 2
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`
      : name.slice(0, 2);
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-soft text-xs font-bold uppercase text-purple-brand">
      {initials}
    </span>
  );
}

export default function SupportersList({ supporters }: SupportersListProps) {
  if (supporters.length === 0) return null;

  return (
    <section className="card p-6 sm:p-8">
      <SectionHeading
        label="Our Supporters"
        title="Thank you!"
        description="Recent partners who have joined this mission."
      />
      <ul className="space-y-3">
        {supporters.map((supporter, i) => (
          <li
            key={`${supporter.name}-${supporter.date}-${i}`}
            className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3"
          >
            <Initials name={supporter.name} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-ink">{supporter.name}</p>
              <p className="text-xs text-muted">{supporter.date}</p>
            </div>
            <span className="text-lg text-orange-brand">♥</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
