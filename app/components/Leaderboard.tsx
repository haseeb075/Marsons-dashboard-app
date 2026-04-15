"use client";

import { useStore } from "../store/useStore";

export default function Leaderboard() {
  const users = useStore((state) => state.leaderboard);

  return (
    <div className="bg-blue-900 text-white p-4 rounded-2xl h-full mr-8">
      <h3 className="text-center border border-yellow-400 rounded-xl py-2 mb-4">
        LEADERBOARD
      </h3>

      <div className="space-y-3">
        {users.map((user, i) => (
          <div
            key={i}
            className="bg-white rounded-[18px] py-3 px-6 flex items-center justify-between shadow-md shrink-0"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full border border-yellow-500 text-[10px] font-bold text-yellow-600">
                {i + 1}
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 shrink-0">
                  <div className="w-full h-full bg-[#3B82F6]/20 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-[8px]">
                      ♛
                    </div>
                  </div>
                  {i === 0 && (
                    <div className="absolute -bottom-1 -left-1 -right-1 bg-red-500 text-white text-[5px] font-black py-0.5 rounded text-center uppercase">
                      Winner
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-[14px] font-black text-gray-800">{user.name}</p>
                  <div className="flex text-[7px] text-yellow-500 mt-0.5 gap-0.5">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[12px] font-medium text-[#D0BD46]">
              {user.score}
            </span>
          </div>
        ))}

        {users.length === 0 && (
          <div className="bg-white rounded-[18px] py-3 px-6 shadow-md text-gray-600">
            No leaderboard data available yet.
          </div>
        )}
      </div>
    </div>
  );
}
