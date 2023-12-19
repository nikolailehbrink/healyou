"use client";

import { useChat } from "ai/react";
import DiagnoseForm from "./form";
import ChatForm from "@/components/ChatForm";
import UserMessage from "@/components/UserMessage";
import AssistantMessage from "@/components/AssistantMessage";

export default function DiagnosePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/diagnose",
    });

  console.log(messages);

  return (
    <>
      <div className="h-full flex-grow">
        <div>
          <div className="mx-auto flex max-w-3xl flex-col gap-4 space-y-4">
            {messages
              .slice(1)
              .map((message) =>
                message.role === "user" ? (
                  <UserMessage key={message.id} content={message.content} />
                ) : (
                  <AssistantMessage
                    key={message.id}
                    content={message.content}
                  />
                ),
              )}
          </div>
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
