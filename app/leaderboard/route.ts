import { readMockData } from "../lib/mockData";

export async function GET() {
  try {
    const data = await readMockData();
    return Response.json(data.leaderboard);
  } catch {
    return Response.json({ message: "Failed to load leaderboard" }, { status: 500 });
  }
}
