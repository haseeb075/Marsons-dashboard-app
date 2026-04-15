"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import Leaderboard from "../components/Leaderboard";
import ProgressBar from "../components/ProgressBar";
import { fetchData } from "../lib/api";
import { useStore } from "../store/useStore";

export default function Dashboard() {
  const { setUser, setProjects, setLeaderboard } = useStore();

  useEffect(() => {
    fetchData().then((data: any) => {
      setUser(data.user);
      setProjects(data.projects);
      setLeaderboard(data.leaderboard);
    });
  }, []);
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="space-y-6 h-full ml-8 mr-8">
          <ProgressBar />
          <div className="grid grid-cols-2 gap-6">
            <ProjectList />
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}
