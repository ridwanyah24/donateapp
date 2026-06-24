"use client";

import { useState } from "react";
import { BUDGET_CATEGORIES, BUDGET_GRAND_TOTAL, BUDGET_SUMMARY } from "@/lib/budget";
import { formatNaira } from "@/lib/format";
import SectionHeading from "./SectionHeading";

export default function BudgetTable() {
  const [expanded, setExpanded] = useState<string | null>(BUDGET_CATEGORIES[0]?.name ?? null);

  function toggleCategory(name: string) {
    setExpanded((prev) => (prev === name ? null : name));
  }

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="card p-6 sm:p-8">
        <SectionHeading
          label="Transparency"
          title="VBS 2026 Tentative Budget"
          description="A breakdown of how your generous gifts will support Vacation Bible School."
        />

        {/* Summary table */}
        <div className="mb-8 overflow-x-auto rounded-xl border border-cream-dark">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 text-right font-semibold">Amount (₦)</th>
              </tr>
            </thead>
            <tbody>
              {BUDGET_SUMMARY.map((row, i) => (
                <tr
                  key={row.category}
                  className={i % 2 === 0 ? "bg-white" : "bg-cream"}
                >
                  <td className="px-4 py-3 font-medium text-ink">{row.category}</td>
                  <td className="px-4 py-3 text-right font-semibold text-navy">
                    {formatNaira(row.total)}
                  </td>
                </tr>
              ))}
              <tr className="bg-orange-light font-bold text-ink">
                <td className="px-4 py-3">Grand Total</td>
                <td className="px-4 py-3 text-right text-orange-dark">
                  {formatNaira(BUDGET_GRAND_TOTAL)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed breakdown */}
        <p className="mb-4 text-sm font-semibold text-ink">Detailed breakdown</p>
        <div className="space-y-3">
          {BUDGET_CATEGORIES.map((category) => {
            const isOpen = expanded === category.name;
            return (
              <div
                key={category.name}
                className="overflow-hidden rounded-xl border border-cream-dark"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(category.name)}
                  className="flex w-full items-center justify-between bg-cream px-4 py-3 text-left transition hover:bg-cream-dark/50"
                >
                  <span className="font-semibold text-ink">{category.name}</span>
                  <span className="flex items-center gap-3">
                    <span className="font-bold text-navy">
                      {formatNaira(category.total)}
                    </span>
                    <span className="text-muted">{isOpen ? "▲" : "▼"}</span>
                  </span>
                </button>

                {isOpen && (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-cream-dark bg-white text-muted">
                          <th className="px-4 py-2.5 font-semibold">Item</th>
                          <th className="px-4 py-2.5 font-semibold">Quantity</th>
                          <th className="px-4 py-2.5 font-semibold">Price/Unit (₦)</th>
                          <th className="px-4 py-2.5 text-right font-semibold">
                            Total (₦)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((line) => (
                          <tr
                            key={line.item}
                            className="border-b border-cream-dark/60 last:border-0"
                          >
                            <td className="px-4 py-2.5 text-ink">{line.item}</td>
                            <td className="px-4 py-2.5 text-muted">{line.quantity}</td>
                            <td className="px-4 py-2.5 text-muted">{line.pricePerUnit}</td>
                            <td className="px-4 py-2.5 text-right font-medium text-navy">
                              {formatNaira(line.total)}
                            </td>
                          </tr>
                        ))}
                        <tr className="bg-orange-light/60 font-semibold text-ink">
                          <td className="px-4 py-2.5" colSpan={3}>
                            {category.name} Total
                          </td>
                          <td className="px-4 py-2.5 text-right">
                            {formatNaira(category.total)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
