"use client";

import { useState } from "react";

type PlanData = {
  goal: string;
  approach: string;
  steps: string[];
  timeline: string;
  missing_elements: {
    goal_clarity: string;
    execution_steps: string;
    resources: string;
    timeline: string;
  };
  simplified_version: string;
  action_steps: string[];
  clarity_score: number;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PlanData | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) {
      alert("Please enter your idea first");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ input }),
      });

      if (!res.ok) throw new Error("API failed");

      const result = await res.json();

      console.log("API RESULT:", result); // 👈 debug

      if (result.error) {
        alert(result.error);
        console.log("DEBUG:", result);
        return;
      }

      setData(result);
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-2">
          Explain My Plan 🚀
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Turn your vague ideas into clear execution strategies
        </p>

        <textarea
          className="w-full border-2 border-gray-200 p-4 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          placeholder="e.g. I want to start a YouTube channel and earn money quickly"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          {loading ? "Analyzing..." : "Analyze Plan"}
        </button>

        {loading && (
          <p className="text-center mt-4 text-purple-600">
            Analyzing your plan...
          </p>
        )}

        {data && (
          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-lg bg-gray-100">
              <h2 className="font-semibold">📝 Original Idea</h2>
              <p>{input}</p>
            </div>

            <div className="p-4 rounded-lg bg-green-100">
              <h2 className="font-semibold text-green-800">🎯 Goal</h2>
              <p>{data.goal}</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-100">
              <h2 className="font-semibold text-blue-800">🛠 Approach</h2>
              <p>{data.approach}</p>
            </div>

            <div className="p-4 rounded-lg bg-yellow-100">
              <h2 className="font-semibold text-yellow-800">📋 Steps</h2>
              <ul className="list-disc ml-5">
                {data.steps?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-purple-100">
              <h2 className="font-semibold text-purple-800">🚀 Action Steps</h2>
              <ul className="list-disc ml-5">
                {data.action_steps?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-100">
              <h2 className="font-semibold text-red-800">
                ⚠️ Missing Elements
              </h2>

              {data.missing_elements ? (
                <ul className="list-disc ml-5 text-red-700">
                  <li>
                    {data.missing_elements.goal_clarity || "Not specified"}
                  </li>
                  <li>
                    {data.missing_elements.execution_steps || "Not specified"}
                  </li>
                  <li>{data.missing_elements.resources || "Not specified"}</li>
                  <li>{data.missing_elements.timeline || "Not specified"}</li>
                </ul>
              ) : (
                <p>No missing elements detected</p>
              )}
            </div>

            <div className="p-4 rounded-lg bg-indigo-100">
              <h2 className="font-semibold text-indigo-800">⏳ Timeline</h2>
              <p>{data.timeline}</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-200">
              <h2 className="font-semibold">✂️ Simplified Version</h2>
              <p>{data.simplified_version}</p>
            </div>

            <div className="p-4 rounded-lg bg-green-200">
              <h2 className="font-semibold">📊 Clarity Score</h2>
              <div className="w-full bg-gray-300 rounded">
                <div
                  className="bg-green-600 text-white text-center p-1 rounded"
                  style={{ width: `${data.clarity_score}%` }}
                >
                  {data.clarity_score}%
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
