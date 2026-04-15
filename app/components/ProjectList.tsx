"use client";

import Image from "next/image";

export default function ProjectList() {
  const projects = new Array(6).fill(0);

  return (
    <div className="space-y-4 overflow-y-auto h-[400px] pr-2">
      {projects.map((_, i) => (
        <div
          key={i}
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
            Admin logica test {i + 1}
          </h3>
          <p className="text-[12px] text-gray-400 font-bold leading-tight">
            Lorem ipsum description...
          </p>
        </div>
      ))}
    </div>
  );
}
