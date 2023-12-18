"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useChat } from "ai/react";
import DiagnoseForm from "./form";

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
        <div className="relative flex max-w-2xl flex-grow items-center gap-x-2 self-center">
          {messages.length > 0 ? (
            <>
              <form onSubmit={handleSubmit}>
                <Textarea
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Say something"
                  rows={1}
                  className="rounded-br- rounded-3xl px-4"
                />
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="flex-shrink-0 text-neutral-950 hover:bg-primary"
                  variant="default"
                  size="icon"
                >
                  <PaperPlaneTilt size={24} weight="duotone" />
                </Button>
              </form>
            </>
          ) : (
            <>
              <DiagnoseForm />
            </>
          )}
        </div>
      </div>
    </>
  );
}
