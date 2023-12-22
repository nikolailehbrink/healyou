"use client";

import { useChat } from "ai/react";
import DiagnoseForm from "./DiagnoseForm";
import ChatForm from "@/components/chat/ChatForm";
import UserMessage from "@/components/chat/UserMessage";
import AssistantMessage from "@/components/chat/AssistantMessage";

export default function DiagnoseChat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
  } = useChat({
    api: "/api/diagnose",
  });

  return (
    <>
      <div className="h-full flex-grow">
        <div>
          <div className="mx-auto flex max-w-3xl flex-col gap-4 space-y-4">
            <DiagnoseForm append={append} formSend={messages.length > 0} />
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
      {messages.length > 0 && (
        <div className="sticky bottom-4 mb-4 flex justify-center">
          <div className="absolute inset-0 -bottom-4 -top-12 bg-gradient-to-b from-transparent to-neutral-900"></div>
          <ChatForm
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  );
}
