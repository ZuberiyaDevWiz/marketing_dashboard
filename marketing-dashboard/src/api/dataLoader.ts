export async function loadMarketing() {
  const res = await fetch("/marketing_data.json");
  if (!res.ok) throw new Error("Failed to load marketing.json");
  return res.json();
}

export async function loadAnalytics() {
  const res = await fetch("/analytics_data.json");
  if (!res.ok) throw new Error("Failed to load analytics.json");
  return res.json();
}
