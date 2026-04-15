export interface User {
  name: string;
  points: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
}

export interface LeaderboardEntry {
  name: string;
  score: number;
}

export interface NotePayload {
  text: string;
}

const handleResponse = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
};

export const fetchUser = async () => {
  const res = await fetch("/user");
  return handleResponse<User>(res);
};

export const fetchProjects = async () => {
  const res = await fetch("/projects");
  return handleResponse<Project[]>(res);
};

export const fetchLeaderboard = async () => {
  const res = await fetch("/leaderboard");
  return handleResponse<LeaderboardEntry[]>(res);
};

export const createNote = async (payload: NotePayload) => {
  const res = await fetch("/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<{ message: string; note: { id: number; text: string } }>(res);
};