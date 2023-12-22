"use client";

import { useChat } from "ai/react";
import ChatForm from "@/components/chat/ChatForm";
import UserMessage from "@/components/chat/UserMessage";
import AssistantMessage from "@/components/chat/AssistantMessage";
import TherapyForm from "./TherapyForm";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function TherapyChat({ searchParams }: Props) {
  const condition = searchParams.condition ?? "";

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
  } = useChat({
    api: "/api/therapy",
  });

  return (
    <>
      <div className="flex h-full flex-grow justify-center">
        <div className="flex w-full max-w-3xl flex-col gap-4">
          <TherapyForm
            condition={condition}
            append={append}
            formSend={messages.length > 0}
          />
          {messages
            .slice(1)
            .map((message) =>
              message.role === "user" ? (
                <UserMessage key={message.id} content={message.content} />
              ) : (
                <AssistantMessage key={message.id} content={message.content} />
              ),
            )}
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
