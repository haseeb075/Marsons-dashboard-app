import { readMockData } from "../lib/mockData";

export async function GET() {
  try {
    const data = await readMockData();
    return Response.json(data.projects);
  } catch {
    return Response.json({ message: "Failed to load projects" }, { status: 500 });
  }
}
