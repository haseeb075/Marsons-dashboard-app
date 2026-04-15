import { promises as fs } from "node:fs";
import path from "node:path";

export interface MockData {
  user: { name: string; points: number };
  projects: Array<{ id: number; title: string; description: string }>;
  leaderboard: Array<{ name: string; score: number }>;
  notes?: Array<{ id: number; text: string; createdAt: string }>;
}

const dataPath = path.join(process.cwd(), "public", "data.json");

export const readMockData = async (): Promise<MockData> => {
  const raw = await fs.readFile(dataPath, "utf8");
  const data = JSON.parse(raw) as MockData;
  return data;
};

export const writeMockData = async (data: MockData) => {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2), "utf8");
};
