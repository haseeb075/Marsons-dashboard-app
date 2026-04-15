"use client";

import Image from "next/image";
import { useStore } from "../store/useStore";

export default function ProjectList() {
  const projects = useStore((state) => state.projects);

  return (
    <div className="space-y-4 overflow-y-auto h-[400px] pr-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#99999926] p-5 rounded-[13px] border border-gray-100 shrink-0"
        >
          <h3 className="text-[18px] font-black text-[#0088CC] flex items-center gap-2">
            <Image
              src="/blackmen.jpg"
              alt="Logo"
              width={28}
              height={28}
              className="rounded-full"
              priority
            />
            {project.title}
          </h3>
          <p className="text-[12px] text-gray-400 font-bold leading-tight">
            {project.description}
          </p>
        </div>
      ))}

      {projects.length === 0 && (
        <div className="bg-[#99999926] p-5 rounded-[13px] border border-gray-100 shrink-0 text-sm text-gray-500">
          No projects available yet.
        </div>
      )}
    </div>
  );
}
