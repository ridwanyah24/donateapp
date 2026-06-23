type Supporter = {
  name: string;
  date: string;
};

type SupportersListProps = {
  supporters: Supporter[];
};

export default function SupportersList({ supporters }: SupportersListProps) {
  if (supporters.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="card-glass rounded-2xl p-6 sm:p-8">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Our Supporters
        </h3>
        <ul className="space-y-3">
          {supporters.map((supporter, i) => (
            <li
              key={`${supporter.name}-${supporter.date}-${i}`}
              className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
            >
              <span className="font-medium">{supporter.name}</span>
              <span className="text-sm text-white/50">{supporter.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
