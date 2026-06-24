import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase";

type UpdateBody = {
  password?: string;
  totalRaised?: number;
  supporterName?: string;
};

export async function POST(request: NextRequest) {
  let body: UpdateBody;

  try {
    body = (await request.json()) as UpdateBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const adminPassword = process.env.ADMIN_PASSWORD ?? "luminos2026";

  if (!body.password || body.password !== adminPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  if (
    body.totalRaised === undefined ||
    typeof body.totalRaised !== "number" ||
    body.totalRaised < 0 ||
    !Number.isFinite(body.totalRaised)
  ) {
    return NextResponse.json(
      { error: "Invalid total raised amount" },
      { status: 400 }
    );
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      {
        error:
          "Server not configured. Add SUPABASE_SERVICE_ROLE_KEY to .env.local (Supabase → Project Settings → API → service_role key), then restart the dev server.",
      },
      { status: 500 }
    );
  }

  try {
    const supabase = createSupabaseAdmin();

    const { error: updateError } = await supabase
      .from("tracker_settings")
      .update({
        total_raised: Math.round(body.totalRaised),
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);

    if (updateError) {
      return NextResponse.json(
        { error: "Failed to update total. Check that schema.sql has been run in Supabase." },
        { status: 500 }
      );
    }

    const supporterName = body.supporterName?.trim();
    if (supporterName) {
      const { error: supporterError } = await supabase
        .from("supporters")
        .insert({ name: supporterName });

      if (supporterError) {
        return NextResponse.json(
          { error: "Total updated but failed to add supporter" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Database connection failed. Check your Supabase credentials." },
      { status: 500 }
    );
  }
}
