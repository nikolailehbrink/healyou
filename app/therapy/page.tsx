"use client";

import { useChat } from "ai/react";
import ChatForm from "@/components/ChatForm";
import UserMessage from "@/components/UserMessage";
import AssistantMessage from "@/components/AssistantMessage";
import TherapyForm from "./form";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function TherapyPage({ searchParams }: Props) {
  console.log(searchParams);

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
