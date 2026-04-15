import { create } from "zustand";
import type { LeaderboardEntry, Project, User } from "../lib/api";

interface Store {
  user: User | null;
  projects: Project[];
  leaderboard: LeaderboardEntry[];
  selectedProject: Project | null;
  setUser: (user: User) => void;
  setProjects: (projects: Project[]) => void;
  setLeaderboard: (data: LeaderboardEntry[]) => void;
  setSelectedProject: (project: Project | null) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  projects: [],
  leaderboard: [],
  selectedProject: null,

  setUser: (user) => set({ user }),
  setProjects: (projects) => set({ projects }),
  setLeaderboard: (leaderboard) => set({ leaderboard }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));
