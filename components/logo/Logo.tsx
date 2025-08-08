"use client";

import { cn } from "@/lib/utils";
import ChatUIText from "@/components/icons/ChatUIText";
import { Logomark } from "./Logomark";

export type LogoTheme = "light" | "dark";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logomark />

      <div className="flex items-center">
        <ChatUIText width={73} height={18} />
      </div>
    </div>
  );
}
