import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface ChatMessageProps {
  avatar: string;
  username: string;
  timestamp: string;
  message: string;
  avatarAlt?: string;
}

export function ChatMessage({
  avatar,
  username,
  timestamp,
  message,
  avatarAlt,
}: ChatMessageProps) {
  return (
    <div className="flex gap-3">
      <Avatar className="w-12 h-12 shrink-0">
        <AvatarImage
          src={avatar}
          alt={avatarAlt || `${username}'s avatar`}
          className="object-cover"
        />
        <AvatarFallback className="bg-slate-200 text-slate-600 font-semibold">
          {username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <span
            className="font-bold text-slate-800 text-base leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.11px",
            }}
          >
            {username}
          </span>
          <span
            className="text-slate-400 text-sm font-medium"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.08px",
            }}
          >
            {timestamp}
          </span>
        </div>

        <p
          className="bg-slate-100 rounded-md p-3 text-base leading-relaxed"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            lineHeight: "25.6px",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
