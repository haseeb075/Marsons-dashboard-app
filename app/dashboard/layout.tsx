"use client";
import Header from "../components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
