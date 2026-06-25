import Link from "next/link";
import { BUDGET_GRAND_TOTAL } from "@/lib/budget";
import { formatNaira } from "@/lib/format";
import SectionHeading from "./SectionHeading";

export default function BudgetTeaser() {
  return (
    <section className="card mx-auto max-w-6xl p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <SectionHeading
            label="Transparency"
            title="Where your gift goes"
            description="See the full VBS 2026 tentative budget — feeding, crafts, t-shirts, medicals, and more."
          />
          <p className="mt-2 text-sm text-muted">
            Total budget:{" "}
            <span className="font-bold text-navy">
              {formatNaira(BUDGET_GRAND_TOTAL)}
            </span>
          </p>
        </div>
        <Link
          href="/budget"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-mid active:scale-[0.98]"
        >
          View full budget breakdown →
        </Link>
      </div>
    </section>
  );
}
