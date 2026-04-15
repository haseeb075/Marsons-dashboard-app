"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const currentXP = progress * 10;
  const minXP = 500;
  const maxXP = 800;

  useEffect(() => {
    setTimeout(() => setProgress(65), 500);
  }, []);

  return (
    <div className="bg-linear-to-r from-blue-300 to-blue-600 px-3 rounded-2xl text-white">
      <div className=" flex items-center gap-2">
        <Image
          src="/doc.png"
          alt="Left logo"
          width={120}
          height={120}
          priority
        />

        <div className="relative flex-1">
          <div
            className="absolute top-0 -translate-x-1/2 -translate-y-full flex flex-col items-center"
            style={{ left: `${progress}%` }}
          >
            <div className="bg-white text-blue-700 text-sm font-black px-2 py-0 rounded-md shadow">
              {currentXP} XP
            </div>
            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] font-bold leading-none">
              v
            </div>
          </div>

          <div className="relative h-6 rounded-full bg-[#b8d2f4]/80 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 bg-[#FCC063]/90 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_8px,transparent_8px,transparent_16px)]"
              style={{ width: `${progress}%` }}
            />

            <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#eaf3ff] text-blue-700 font-black text-xs px-2 py-0 rounded-full leading-none inline-flex items-center">
              {minXP} XP
            </span>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-bold text-blue-500 text-sm leading-none inline-flex items-center">
              {maxXP} XP
            </span>
          </div>
        </div>

        <Image
          src="/appendicamice.png"
          alt="Right logo"
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
}
