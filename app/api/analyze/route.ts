import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input } = await req.json();

  const isDetailed = input.length > 60;

  const response = {
    goal: `Build a realistic plan to achieve: ${input}`,

    approach: isDetailed
      ? "Analyze the idea deeply, define milestones, and execute with measurable goals."
      : "Break the goal into actionable steps and execute consistently.",

    steps: isDetailed
      ? [
          "Validate the idea with real users",
          "Design MVP features",
          "Build initial version",
          "Test and collect feedback",
          "Iterate and improve",
        ]
      : [
          "Define a clear objective",
          "Research the domain",
          "Start small and iterate",
          "Track progress",
        ],

    timeline: isDetailed ? "2–4 months" : "3–6 months",

    missing_elements: {
      goal_clarity:
        input.length < 40 ? "Goal is vague" : "Goal is fairly clear",
      execution_steps: "Detailed execution plan can be improved",
      resources: "Resources not clearly defined",
      timeline: "Timeline needs more precision",
    },

    simplified_version: input,

    action_steps: isDetailed
      ? ["Write a detailed plan", "Start building MVP", "Test with users"]
      : [
          "Write down a clear goal",
          "Create a weekly plan",
          "Start execution today",
        ],

    clarity_score: isDetailed ? 80 : 60,
  };

  return NextResponse.json(response);
}
