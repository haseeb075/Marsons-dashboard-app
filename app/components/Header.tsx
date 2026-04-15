"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center px-6 py-4 bg-transparent">
      {/* Logo */}
      <div className="shrink-0">
        <Image src="/logo.png" alt="Logo" width={120} height={120} priority />
      </div>

      {/* Center content: Greeting + XP BAR */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-8 -translate-x-6">
          <div>
            <h2 className="text-2xl font-semibold">Ciao, Dr. Luca!</h2>
            <p className="text-gray-500">
              Inizia la giornata con un nuovo corso!
            </p>
          </div>

          {/* XP BAR */}
          <div className="relative w-[150px] h-10 rounded-full bg-blue-500 overflow-hidden shadow-xl">
            {/* BLUE BASE */}
            <div className="absolute inset-0 bg-blue-500" />

            {/* YELLOW PROGRESS (smaller height than blue) */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[75%] bg-yellow-400 rounded-full transition-all duration-500 flex items-center px-2"
              style={{ width: "80%" }}
            >
              <div className="relative w-full flex items-center justify-center">
                {/* XP Text */}
                <span className="text-center text-[22px] md:text-[22px] text-3xl font-bold text-[#1A202C]">
                  345
                </span>

                {/* Logo */}
                <Image
                  src="/headlogo.png"
                  alt="Logo"
                  width={28}
                  height={28}
                  className="rounded-full absolute right-1"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar */}
      <Image
        src="/avatar.jpg"
        alt="Avatar"
        width={60}
        height={60}
        className="rounded-full shrink-0"
        priority
      />
    </div>
  );
}
