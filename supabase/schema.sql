-- VBS 2026 Donation Tracker schema
-- Run this in the Supabase SQL Editor

-- Settings table (singleton row)
create table if not exists tracker_settings (
  id int primary key default 1 check (id = 1),
  total_raised bigint not null default 0,
  goal bigint not null default 3000000,
  updated_at timestamptz not null default now()
);

-- Supporters log
create table if not exists supporters (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

-- Seed the singleton settings row
insert into tracker_settings (id, total_raised, goal)
values (1, 0, 3000000)
on conflict (id) do nothing;

-- Enable RLS
alter table tracker_settings enable row level security;
alter table supporters enable row level security;

-- Public read access
create policy "Allow public read on tracker_settings"
  on tracker_settings for select
  using (true);

create policy "Allow public read on supporters"
  on supporters for select
  using (true);

-- No direct write policies — all writes go through API with service role key
