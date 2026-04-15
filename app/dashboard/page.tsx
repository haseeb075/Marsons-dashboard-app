"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectList from "../components/ProjectList";
import Leaderboard from "../components/Leaderboard";
import ProgressBar from "../components/ProgressBar";
import {
  createNote,
  fetchLeaderboard,
  fetchProjects,
  fetchUser,
} from "../lib/api";
import { useStore } from "../store/useStore";

export default function Dashboard() {
  const { setUser, setProjects, setLeaderboard } = useStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [noteText, setNoteText] = useState("");
  const [noteStatus, setNoteStatus] = useState<"idle" | "loading">("idle");
  const [noteError, setNoteError] = useState("");
  const [noteSuccess, setNoteSuccess] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");
        setSuccess("");

        const [user, projects, leaderboard] = await Promise.all([
          fetchUser(),
          fetchProjects(),
          fetchLeaderboard(),
        ]);

        setUser(user);
        setProjects(projects);
        setLeaderboard(leaderboard);
        setSuccess("Dashboard data loaded successfully.");
      } catch {
        setError("Failed to load dashboard data. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [setLeaderboard, setProjects, setUser]);

  const handleNoteSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNoteError("");
    setNoteSuccess("");

    if (!noteText.trim()) {
      setNoteError("Please enter a note before saving.");
      return;
    }

    try {
      setNoteStatus("loading");
      const response = await createNote({ text: noteText });
      setNoteSuccess(response.message);
      setNoteText("");
    } catch {
      setNoteError("Failed to save note. Please try again.");
    } finally {
      setNoteStatus("idle");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="space-y-6 h-full ml-8 mr-8">
          {loading && (
            <div className="rounded-lg bg-blue-50 text-blue-700 px-4 py-2 text-sm">
              Loading dashboard data...
            </div>
          )}

          {!loading && error && (
            <div className="rounded-lg bg-red-50 text-red-700 px-4 py-2 text-sm">
              {error}
            </div>
          )}

          {!loading && !error && success && (
            <div className="rounded-lg bg-green-50 text-green-700 px-4 py-2 text-sm">
              {success}
            </div>
          )}

          <form
            onSubmit={handleNoteSubmit}
            className="rounded-lg bg-white border border-gray-200 p-4 flex items-center gap-3"
          >
            <input
              value={noteText}
              onChange={(event) => setNoteText(event.target.value)}
              placeholder="Add a quick note"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
            />
            <button
              type="submit"
              disabled={noteStatus === "loading"}
              className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm disabled:opacity-60"
            >
              {noteStatus === "loading" ? "Saving..." : "Save Note"}
            </button>
          </form>

          {noteError && (
            <div className="rounded-lg bg-red-50 text-red-700 px-4 py-2 text-sm">
              {noteError}
            </div>
          )}

          {noteSuccess && (
            <div className="rounded-lg bg-green-50 text-green-700 px-4 py-2 text-sm">
              {noteSuccess}
            </div>
          )}

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
