import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { languageModel } from "@/utils/openai/model";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getStreamingTextResponse(
  req: Request,
  systemMessage: string,
) {
  const { messages } = (await req.json()) as {
    messages: ChatCompletionMessageParam[];
  };

  const response = await openai.chat.completions.create({
    model: languageModel,
    stream: true,
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
