# VBS 2026 Donation Tracker

A live fundraising tracker for **Rhema Living Word Global Ministries** Vacation Bible School 2026 — *Illuminate!*

Built with Next.js, Tailwind CSS, Framer Motion, and Supabase. Deployed on Vercel.

## Features

- Live donation progress with animated counter and gradient progress bar
- Dynamic milestone badges as fundraising grows
- Moniepoint payment details with copy-to-clipboard
- Recent supporters list (admin-added)
- Password-protected admin panel to update totals
- Auto-refreshes every 30 seconds for visitors

## Quick Start (Local)

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Open the **SQL Editor** and run the contents of [`supabase/schema.sql`](supabase/schema.sql)
3. Go to **Project Settings → API** and copy your URL and keys

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_PASSWORD=luminos2026
```

> **Important:** Change `ADMIN_PASSWORD` to something secure before deploying to production.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Admin Usage

1. Go to **`/admin`** on your site (e.g. [http://localhost:3000/admin](http://localhost:3000/admin))
2. Enter the admin password (default: `luminos2026`)
3. Enter the new cumulative total raised
4. Optionally add a supporter name to highlight
5. Click **Save**

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add all four environment variables from `.env.example`
4. Deploy

Vercel will automatically build and serve the app. Share the production URL with your congregation.

## Project Structure

```
app/
  api/tracker/          GET — public tracker data
  api/admin/update/     POST — password-protected admin update
  page.tsx              Main tracker page
components/             UI sections and admin panel
lib/                    Supabase client, formatting, milestones
supabase/schema.sql     Database setup script
public/logos/           Optimized partner logos
```

## Goal

**₦3,000,000** for VBS 2026 · 3rd–7th August · Ages 3–16 · 400+ children
