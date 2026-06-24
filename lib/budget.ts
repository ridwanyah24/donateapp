export type BudgetLineItem = {
  item: string;
  quantity: string;
  pricePerUnit: string;
  total: number;
};

export type BudgetCategory = {
  name: string;
  total: number;
  items: BudgetLineItem[];
};

export const BUDGET_GRAND_TOTAL = 3_020_000;

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  {
    name: "Feeding",
    total: 1_000_000,
    items: [
      { item: "Drinks", quantity: "2,400 pcs (400 × 6 days)", pricePerUnit: "≈166.67", total: 400_000 },
      { item: "Biscuits", quantity: "1,200 pcs (400 × 3 days)", pricePerUnit: "150.00", total: 180_000 },
      { item: "Donut", quantity: "400 pcs", pricePerUnit: "200.00", total: 80_000 },
      { item: "Buns", quantity: "400 pcs", pricePerUnit: "200.00", total: 80_000 },
      { item: "Bag of Rice", quantity: "1 bag", pricePerUnit: "60,000.00", total: 60_000 },
      { item: "Meat", quantity: "—", pricePerUnit: "—", total: 100_000 },
      { item: "Ingredient", quantity: "—", pricePerUnit: "—", total: 75_000 },
      { item: "Disposable Plates and Spoon", quantity: "—", pricePerUnit: "—", total: 20_000 },
      { item: "Packaging Leathers", quantity: "—", pricePerUnit: "—", total: 5_000 },
    ],
  },
  {
    name: "Crafts",
    total: 200_000,
    items: [
      { item: "Colored Pencils", quantity: "—", pricePerUnit: "—", total: 10_000 },
      { item: "Crayons", quantity: "10 packs", pricePerUnit: "1,000.00", total: 10_000 },
      { item: "Glue", quantity: "—", pricePerUnit: "—", total: 15_000 },
      { item: "Scissors (child-safe)", quantity: "10 pcs", pricePerUnit: "2,000.00", total: 20_000 },
      { item: "Coloured Tissue Paper", quantity: "—", pricePerUnit: "—", total: 15_000 },
      { item: "Black Paper", quantity: "—", pricePerUnit: "—", total: 15_000 },
      { item: "Ziplock Bags", quantity: "400 pcs", pricePerUnit: "125.00", total: 50_000 },
      { item: "Disposable Cups", quantity: "400 pcs", pricePerUnit: "62.50", total: 25_000 },
      { item: "Strings and Ribbons", quantity: "—", pricePerUnit: "—", total: 10_000 },
      { item: "Decorative Items", quantity: "—", pricePerUnit: "—", total: 30_000 },
    ],
  },
  {
    name: "T-Shirts",
    total: 1_000_000,
    items: [
      { item: "T-Shirt", quantity: "400 pcs", pricePerUnit: "2,500.00", total: 1_000_000 },
    ],
  },
  {
    name: "Printing / Paperwork",
    total: 300_000,
    items: [
      { item: "A4 Printed Paper", quantity: "—", pricePerUnit: "—", total: 20_000 },
      { item: "Printed Bible Study Worksheets", quantity: "—", pricePerUnit: "—", total: 80_000 },
      { item: "T-Shirt Branding / Printing", quantity: "400 pcs", pricePerUnit: "500.00", total: 200_000 },
    ],
  },
  {
    name: "Medicals",
    total: 50_000,
    items: [
      { item: "Wound Care & First Aid", quantity: "—", pricePerUnit: "—", total: 14_500 },
      { item: "Fever & Pain Management", quantity: "—", pricePerUnit: "—", total: 9_000 },
      { item: "Allergy & Respiratory", quantity: "—", pricePerUnit: "—", total: 5_500 },
      { item: "Digestive & Rehydration", quantity: "—", pricePerUnit: "—", total: 5_500 },
      { item: "Eye, Skin & Topical Care", quantity: "—", pricePerUnit: "—", total: 5_500 },
      { item: "Contingency Reserve", quantity: "—", pricePerUnit: "—", total: 10_000 },
    ],
  },
  {
    name: "Organisation",
    total: 150_000,
    items: [
      { item: "Name Tags", quantity: "400 pcs", pricePerUnit: "100.00", total: 40_000 },
      { item: "Folders / Clearbags", quantity: "400 pcs", pricePerUnit: "100.00", total: 40_000 },
      { item: "Pens / Pencils", quantity: "400 pcs", pricePerUnit: "125.00", total: 50_000 },
      { item: "Markers and Refill Ink", quantity: "—", pricePerUnit: "—", total: 10_000 },
      { item: "Erasers", quantity: "—", pricePerUnit: "—", total: 5_000 },
      { item: "Sharpeners", quantity: "—", pricePerUnit: "—", total: 5_000 },
    ],
  },
  {
    name: "Transportation",
    total: 150_000,
    items: [
      { item: "Town Branch", quantity: "5 days", pricePerUnit: "10,000.00", total: 50_000 },
      { item: "Mahuta Branch", quantity: "5 days", pricePerUnit: "10,000.00", total: 50_000 },
      { item: "U/Tanko Branch", quantity: "5 days", pricePerUnit: "10,000.00", total: 50_000 },
    ],
  },
  {
    name: "Rentals",
    total: 50_000,
    items: [
      { item: "Tables & Chairs", quantity: "5 days", pricePerUnit: "10,000.00", total: 50_000 },
    ],
  },
  {
    name: "Fuel",
    total: 100_000,
    items: [
      { item: "Fuel (4 hours daily)", quantity: "5 days", pricePerUnit: "20,000.00", total: 100_000 },
    ],
  },
  {
    name: "Toiletries & Sanitation",
    total: 20_000,
    items: [
      { item: "Liquid Hand Wash", quantity: "2 pcs", pricePerUnit: "1,000.00", total: 2_000 },
      { item: "Hand Sanitizers", quantity: "2 pcs", pricePerUnit: "1,000.00", total: 2_000 },
      { item: "Toilet Disinfectant", quantity: "2 pcs", pricePerUnit: "2,000.00", total: 4_000 },
      { item: "Toilet Rolls", quantity: "10 pcs", pricePerUnit: "300.00", total: 3_000 },
      { item: "Sanitary Pad", quantity: "3 packs", pricePerUnit: "1,000.00", total: 3_000 },
      { item: "Detergents", quantity: "2 pcs", pricePerUnit: "2,000.00", total: 4_000 },
      { item: "Air Fresheners", quantity: "2 pcs", pricePerUnit: "1,000.00", total: 2_000 },
    ],
  },
];

export const BUDGET_SUMMARY = BUDGET_CATEGORIES.map(({ name, total }) => ({
  category: name,
  total,
}));
