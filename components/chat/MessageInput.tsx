"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SendIcon from "@/components/icons/SendIcon";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center gap-4 px-5 py-4 bg-white border border-slate-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message chatui..."
            className="flex-1 border-0 bg-transparent text-slate-600 text-base font-medium placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              letterSpacing: "-0.11px",
            }}
          />
          <Button
            type="submit"
            size="icon"
            className="w-10 h-10 p-0 rounded-full bg-[#4F46E5] hover:opacity-80"
          >
            <SendIcon width={16} height={19} color="#fff" />
          </Button>
        </div>
      </form>
      <p
        className="text-slate-400 text-sm font-medium text-center mt-2 px-4"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          letterSpacing: "-0.08px",
          lineHeight: "20px",
        }}
      >
        chatui can make mistakes. Check our Terms & Conditions.
      </p>
    </div>
  );
}
