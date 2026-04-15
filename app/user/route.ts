import { readMockData } from "../lib/mockData";

export async function GET() {
  try {
    const data = await readMockData();
    return Response.json(data.user);
  } catch {
    return Response.json({ message: "Failed to load user" }, { status: 500 });
  }
}
