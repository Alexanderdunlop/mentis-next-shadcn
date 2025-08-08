"use client";

import { ChatInterface } from "@/components/chat/ChatInterface";

export default function ChatUIPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto">
        <ChatInterface />
      </div>
    </div>
  );
}
