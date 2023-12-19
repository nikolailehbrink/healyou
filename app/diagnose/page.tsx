"use client";

import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import DiagnoseForm from "./form";
import ChatForm from "@/components/ChatForm";

export default function DiagnosePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/diagnose",
    });

  console.log(messages);

  return (
    <>
      <div className="h-full flex-grow">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex rounded-2xl px-5 py-3",
                message.role === "user"
                  ? "ml-12 self-end bg-background"
                  : "mr-12 items-start gap-2 bg-primary text-background",
              )}
            >
              {message.content}
            </div>
          ))}
        </div>
      </div>
      <div className="sticky bottom-4 mb-4 flex justify-center">
        <div className="absolute inset-0 -bottom-4 -top-12 bg-gradient-to-b from-transparent to-neutral-900"></div>
        {messages.length > 0 && (
          <ChatForm
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
}
