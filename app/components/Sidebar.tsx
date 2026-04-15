"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Book,
  FileQuestionMark,
  FolderDown,
  ReceiptText,
  Trophy,
  Eclipse,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Bacheca annunci", path: "/bacheca-annunci", icon: Book },
    { name: "Simulatore", path: "/simulatore", icon: ReceiptText },
    {
      name: "Simulazioni archiviate",
      path: "/simulazioni-archiviate",
      icon: FolderDown,
    },
    {
      name: "Quadernino degli errori",
      path: "/qadernino-degli-errori",
      icon: FileQuestionMark,
    },
    {
      name: "Simulazione ufficiale",
      path: "/simulazione-ufficiale",
      icon: Trophy,
    },
    { name: "Le mie statistiche", path: "/le-mie-statistiche", icon: Eclipse },
  ];

  return (
    <div className="w-64 max-h-full bg-blue-700 text-white flex flex-col p-4 rounded-r-3xl">
      <div className="flex-1  overflow-y-auto">
        {/* Menu */}
        <ul className="space-y-3">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    pathname === item.path
                      ? "bg-black text-white"
                      : "hover:bg-blue-600"
                  }`}
                >
                  {/* ICON */}
                  {Icon && (
                    <Icon
                      className={`w-5 h-5 ${
                        pathname === item.path ? "text-white" : "text-gray-200"
                      }`}
                    />
                  )}

                  {/* TEXT */}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
