"use client";

import { Menu } from "lucide-react";
import { Logo } from "@/components/logo/Logo";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white">
      <Logo />
      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
        <Menu size={20} className="text-slate-600" />
      </button>
    </div>
  );
}
