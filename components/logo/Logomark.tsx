"use client";

import { cn } from "@/lib/utils";
import CLogoWhite from "@/components/icons/CLogoWhite";

interface LogomarkProps {
  className?: string;
}

export function Logomark({ className }: LogomarkProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center w-8 h-8 border-[0.25px] border-transparent shadow-[0px_4px_8px_rgba(255,255,255,0.32)]",
        className
      )}
    >
      <div className="relative w-8 h-8 overflow-hidden bg-indigo-600 rounded-md">
        <img
          src="/images/gradient-bg.png"
          alt="Gradient background"
          className="absolute inset-0 w-16 h-16 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <CLogoWhite width={16} height={18} />
        </div>
      </div>
    </div>
  );
}
