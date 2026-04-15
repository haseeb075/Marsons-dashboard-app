import { create } from "zustand";

interface Store {
  user: any;
  projects: any[];
  leaderboard: any[];
  selectedProject: any;
  setUser: (user: any) => void;
  setProjects: (projects: any[]) => void;
  setLeaderboard: (data: any[]) => void;
  setSelectedProject: (project: any) => void;
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
