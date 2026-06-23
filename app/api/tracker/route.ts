import { NextResponse } from "next/server";
import { formatDate } from "@/lib/format";
import {
  computePercent,
  computeRemaining,
  getMilestone,
} from "@/lib/milestones";
import { createSupabaseAnon, type Supporter } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = createSupabaseAnon();

    const { data: settings, error: settingsError } = await supabase
      .from("tracker_settings")
      .select("*")
      .eq("id", 1)
      .single();

    if (settingsError || !settings) {
      return NextResponse.json(
        { error: "Failed to fetch tracker settings" },
        { status: 500 }
      );
    }

    const { data: supporters, error: supportersError } = await supabase
      .from("supporters")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    if (supportersError) {
      return NextResponse.json(
        { error: "Failed to fetch supporters" },
        { status: 500 }
      );
    }

    const totalRaised = Number(settings.total_raised);
    const goal = Number(settings.goal);
    const percent = computePercent(totalRaised, goal);

    return NextResponse.json({
      totalRaised,
      goal,
      percent,
      remaining: computeRemaining(totalRaised, goal),
      milestone: getMilestone(percent),
      supporters: (supporters as Supporter[]).map((s) => ({
        name: s.name,
        date: formatDate(s.created_at),
      })),
    });
  } catch {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }
}
