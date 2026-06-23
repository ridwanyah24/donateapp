import type { Metadata } from "next";
import AdminForm from "@/components/AdminForm";

export const metadata: Metadata = {
  title: "Admin | VBS 2026 Donation Tracker",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminForm />;
}
