import { createClient } from "@supabase/supabase-js";

export function createSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(url, key);
}

export function createSupabaseAnon() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(url, key);
}

export type TrackerSettings = {
  id: number;
  total_raised: number;
  goal: number;
  updated_at: string;
};

export type Supporter = {
  id: string;
  name: string;
  created_at: string;
};

export type TrackerResponse = {
  totalRaised: number;
  goal: number;
  percent: number;
  remaining: number;
  milestone: string;
  supporters: { name: string; date: string }[];
};


