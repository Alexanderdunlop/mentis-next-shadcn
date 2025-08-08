"use client";

import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageInput } from "./MessageInput";
import { ChatMessage } from "./ChatMessage";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    type: "user",
    content: "do androids truly dream of electric sheeps or not?",
    timestamp: "02:22 AM",
  },
  {
    id: "2",
    type: "ai",
    content:
      'The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel "Do Androids Dream of Electric Sheep?" by Philip K. Dick.',
    timestamp: "02:22 AM",
  },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content:
          "Thank you for your message. This is a simulated response from the chatui assistant.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            timestamp={message.timestamp}
            avatar={
              message.type === "user"
                ? "/images/user-avatar.jpg"
                : "/images/chat-avatar.png"
            }
            username={message.type === "user" ? "You" : "chatui"}
          />
        ))}
      </div>

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
