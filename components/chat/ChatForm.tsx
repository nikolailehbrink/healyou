import { CircleNotch, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import type { ChangeEvent, FormEvent } from "react";
import type { ChatRequestOptions } from "ai";

type Props = {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined,
  ) => void;
  isLoading: boolean;
};

export default function ChatForm({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: Props) {
  return (
    <form
      className="relative flex max-w-2xl flex-grow items-center gap-x-2 self-center"
      onSubmit={handleSubmit}
    >
      <Textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Say something"
        rows={1}
        className="rounded-br- rounded-3xl px-4"
      ></Textarea>
      <Button
        disabled={isLoading}
        type="submit"
        className="flex-shrink-0 text-neutral-950 hover:bg-primary"
        variant="default"
        size="icon"
      >
        {isLoading ? (
          <CircleNotch className="animate-spin" size={24} weight="duotone" />
        ) : (
          <PaperPlaneTilt size={24} weight="duotone" />
        )}
      </Button>
    </form>
  );
}
